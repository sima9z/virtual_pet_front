import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { SelectChangeEvent } from '@mui/material';

import { checkPets } from '../../features/api/checkPets';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const useCustomize = () => {
  const [petName, setPetName] = useState<string>('');
  const [selectedPetType, setSelectedPetType] = useState<string>('');
  const [selectedPetLook, setSelectedPetLook] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false); // ペットが存在するかのフラグ

  const router = useRouter();

  const handlePetTypeChange = (event: SelectChangeEvent<string>) => {
    setSelectedPetType(event.target.value as string);
  };

  const handlePetLookChange = (event: SelectChangeEvent<string>) => {
    setSelectedPetLook(event.target.value as string);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

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
    }
  };

  return {
    petName,
    setPetName,
    selectedPetType,
    selectedPetLook,
    error,
    handlePetTypeChange,
    handlePetLookChange,
    handleSubmit,
  };
};

export default useCustomize;
