"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CssBaseline, ThemeProvider, createTheme, Container, Box, TextField, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent, Button } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { Typography } from '@mui/material';
import Image from 'next/image';

const cache = createCache({ key: 'css', prepend: true });

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const Customize: React.FC = () => {
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

  const theme = createTheme({
    palette: {
      primary: {
        main: '#E8AFAF',
      },
      secondary: {
        main: '#f8bbd0',
      },
    },
  });

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container style={{ padding: '0 2%' }}>
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh">
            <Typography variant="h3" marginBottom="30px">ペットのカスタマイズ</Typography>
            <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: "100%", maxWidth: "600px", gap: "30px" }}>
              <TextField
                label="ペットの名前"
                variant="outlined"
                margin="normal"
                fullWidth
                value={petName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPetName(e.target.value)}
                required
              />
              <Box width="100%" display="flex" justifyContent="space-between" marginTop="1rem">
                <Box flex="1" display="flex" justifyContent="center" alignItems="center" bgcolor="#e0e0e0" height="200px">
                  {selectedPetType && (
                    <Image
                      src={`/${selectedPetType === '犬' ? '犬' : '猫'}.png`}
                      alt="Virtual Pet Image"
                      width={selectedPetType === '犬' ? 200 : 150} // 犬なら200、猫なら150
                      height={selectedPetType === '犬' ? 200 : 150} // 犬なら200、猫なら150
                      style={{ objectFit: 'cover' }}
                    />
                  )}
                </Box>
                <Box flex="1" display="flex" flexDirection="column" justifyContent="space-between" marginLeft="20px">
                  <FormControl fullWidth>
                    <InputLabel id="pet-type-label">ペットの種類</InputLabel>
                    <Select
                      labelId="pet-type-label"
                      id="pet-type-select"
                      value={selectedPetType}
                      label="ペットの種類"
                      onChange={handlePetTypeChange}
                    >
                      <MenuItem value="犬">犬</MenuItem>
                      <MenuItem value="猫">猫</MenuItem>
                    </Select>
                  </FormControl>
                  <Box mt={2}>
                    <FormControl fullWidth>
                      <InputLabel id="pet-look-label">ペットの見た目</InputLabel>
                      <Select
                        labelId="pet-look-label"
                        id="pet-look-select"
                        value={selectedPetLook}
                        label="ペットの見た目"
                        onChange={handlePetLookChange}
                      >
                        <MenuItem value="タイプ1">タイプ1</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Box>
              </Box>
              <Button type="submit" variant="contained" color="primary" sx={{ color: 'white', marginTop: '30px' }} onClick={handleSubmit}>
                登録
              </Button>
              {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
          </Box>
        </Container>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default Customize;