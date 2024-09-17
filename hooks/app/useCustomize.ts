import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { SelectChangeEvent } from '@mui/material';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const useCustomize = () => {
  const [petName, setPetName] = useState<string>('');
  const [selectedPetType, setSelectedPetType] = useState<string>('');
  const [selectedPetLook, setSelectedPetLook] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  const handlePetTypeChange = (event: SelectChangeEvent<string>) => {
    setSelectedPetType(event.target.value as string);
  };

  const handlePetLookChange = (event: SelectChangeEvent<string>) => {
    setSelectedPetLook(event.target.value as string);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const endpoint = selectedPetType === '犬' ? `/dogs` : `/cats`;
    const url = `${API_BASE_URL}${endpoint}`;

    console.log('Endpoint:', url);

    const petData = {
      name: petName,
      breed: selectedPetLook,
      age: 0,
      experience: 0,
      level: 1,
      states: JSON.stringify({ hungry: 0, thirsty: 0 }),
      is_adult: false,
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(petData),
      });

      if (response.ok) {
        console.log('Pet created successfully');
        router.push('/main');
      } else {
        console.error('Failed to create pet');
        setError('Failed to create pet');
      }
    } catch (error) {
      console.error('An error occurred:', error);
      setError('An error occurred while creating pet');
    }
  };

  return{
    petName,
    setPetName,
    selectedPetType,
    selectedPetLook,
    error,
    handlePetTypeChange,
    handlePetLookChange,
    handleSubmit
  };
}

export default useCustomize;
