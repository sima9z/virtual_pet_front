import React,{useState,useEffect} from 'react';
import { Button, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

const cache = createCache({ key: 'css', prepend: true });

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

type CreatePetsButtonProps = {
  petName: string;
  selectedPetType: string;
  selectedPetLook: string;
  onSuccess: () => void;
};

const CreatePetsButton: React.FC<CreatePetsButtonProps> = ({ petName, selectedPetType, selectedPetLook, onSuccess }) => {
  const [userId, setUserId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/users/current_user`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          credentials: 'include' 
        });

        if (response.ok) {
          const data = await response.json();
          console.log('User ID:', data.id);
          setUserId(data.id);
        } else {
          console.error('Failed to fetch user ID', response.statusText);
          setError('Failed to fetch user ID');
        }
      } catch (error) {
        console.error('An error occurred:', error);
        setError('An error occurred while fetching user ID');
      }
    };

    fetchUserId();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!userId) {
      console.error('No user ID available');
      setError('No user ID available');
      return;
    }

    const endpoint = selectedPetType === '犬' ? `users/${userId}/dog` : `users/${userId}/cat`;
    const url = `${API_BASE_URL}/${endpoint}`;

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
        onSuccess();
      } else {
        console.error('Failed to create pet');
        setError('Failed to create pet');
      }
    } catch (error) {
      console.error('An error occurred:', error);
      setError('An error occurred while creating pet');
    }
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: '#f8bbd0',
      }
    },
  });

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <Button type="submit" variant="contained" color="primary" sx={{ color: 'white', marginTop: '30px' }} onClick={handleSubmit}>
            登録
          </Button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
      </ThemeProvider>
    </CacheProvider>
  );
};

export default CreatePetsButton ;