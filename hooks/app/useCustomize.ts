import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { SelectChangeEvent } from '@mui/material';

import { checkPets } from '../../features/api/checkPets';
import { getPetDetails } from '../../features/api/getPetDetails';

import { PetDetails } from '../../types/index';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const useCustomize = () => {
  const [petName, setPetName] = useState<string>('');
  const [selectedPetType, setSelectedPetType] = useState<string>('');
  const [selectedPetLook, setSelectedPetLook] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false); // ペットが存在するかのフラグ
  const [isLoading, setIsLoading] = useState<boolean>(false); 

  const router = useRouter();

  const handlePetTypeChange = (event: SelectChangeEvent<string>) => {
    setSelectedPetType(event.target.value as string);
  };

  const handlePetLookChange = (event: SelectChangeEvent<string>) => {
    setSelectedPetLook(event.target.value as string);
  };

  // ペット情報を取得する関数
  const fetchPetDetails = async () => {
    try {
      const petDetails: PetDetails = await getPetDetails(); // PetDetails型でデータ取得
      setPetName(petDetails.name);
      setSelectedPetType(petDetails.species); // species から犬か猫かを設定
      setSelectedPetLook(petDetails.breed); // ペットの見た目（種類）を設定
    } catch (error) {
      console.error('Error fetching pet details:', error);
      setError('An error occurred while fetching pet details');
    }
  };

  useEffect(() => {
    // ペットが存在する場合、詳細情報を取得して表示
    const checkAndFetchPetDetails = async () => {
      try {
        const data = await checkPets();
        if (data.pets_exist) {
          setIsEditing(true);
          await fetchPetDetails(); // ペット情報を取得
        } else {
          setIsEditing(false);
        }
      } catch (error) {
        console.error('Error checking pets:', error);
        setError('An error occurred while checking pets');
      }
    };

    checkAndFetchPetDetails();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // ペットが存在するか確認してからリクエストを送信
      const data = await checkPets();
      const endpoint = selectedPetType === '犬'
        ? (data.pets_exist ? `/dogs/${data.dog_id}` : `/dogs`)
        : (data.pets_exist ? `/cats/${data.cat_id}` : `/cats`);
      const method = data.pets_exist ? 'PUT' : 'POST';  // pets_existがtrueならPUT（更新）、falseならPOST（新規作成）
      const url = `${API_BASE_URL}${endpoint}`;

      console.log('Endpoint:', url);

      const petData = {
        name: petName,
        breed: selectedPetLook,
      };

      const response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(petData),
      });

      if (response.ok) {
        console.log(`Pet ${method === 'PUT' ? 'updated' : 'created'} successfully`);
        router.push('/main');
      } else {
        console.error(`Failed to ${method === 'PUT' ? 'update' : 'create'} pet`);
        setError(`Failed to ${method === 'PUT' ? 'update' : 'create'} pet`);
      }
    } catch (error) {
      console.error('An error occurred:', error);
      setError('An error occurred while creating/updating pet');
    } finally {
      setIsLoading(false); // ローディング終了
    }
  };

  return {
    petName,
    setPetName,
    selectedPetType,
    selectedPetLook,
    error,
    isEditing,
    handlePetTypeChange,
    handlePetLookChange,
    handleSubmit,
    isLoading
  };
};

export default useCustomize;