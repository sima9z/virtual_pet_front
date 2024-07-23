"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CssBaseline, ThemeProvider, createTheme, Container, Box, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { Button, Typography } from '@mui/material';
import Image from 'next/image';

const cache = createCache({ key: 'css', prepend: true });

export default function Customize() {
  const [petName, setPetName] = useState('');
  const [selectedPetType, setSelectedPetType] = useState('');
  const [selectedPetLook, setSelectedPetLook] = useState('');

  const router = useRouter();

  const handlePetTypeChange = (event: any) => {
    setSelectedPetType(event.target.value);
  };

  const handlePetLookChange = (event: any) => {
    setSelectedPetLook(event.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const endpoint = selectedPetType === '犬' ? '/api/dogs' : '/api/cats';
    const petData = {
      name: petName,
      breed: selectedPetLook,
      age: 0,
      experience: 0,
      level: 1,
      hungry: 0,
      thirsty: 0,
      is_adult: false,
    };

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(petData),
      });

      if (response.ok) {
        goToMainPage();
      } else {
        console.error('Failed to create pet');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const goToMainPage = () => {
    router.push('/main');
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
            <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: "100%", maxWidth: "600px", gap: "30px" }} onSubmit={handleSubmit}>
              <TextField
                label="ペットの名前"
                variant="outlined"
                margin="normal"
                fullWidth
                value={petName}
                onChange={(e) => setPetName(e.target.value)}
                required
              />
              <Box width="100%" display="flex" justifyContent="space-between" marginTop="1rem">
                <Box flex="1" display="flex" justifyContent="center" alignItems="center" bgcolor="#e0e0e0" height="200px">
                  <Image
                    src="/犬.png"
                    alt="Virtual Pet Image"
                    width={200}
                    height={200}
                    style={{ objectFit: 'cover' }}
                  />
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
                        <MenuItem value="タイプ2">タイプ2</MenuItem>
                        <MenuItem value="タイプ3">タイプ3</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Box>
              </Box>
              <Button type="submit" variant="contained" color="secondary" sx={{ color: 'white', marginTop: '30px' }}>
                登録
              </Button>
            </form>
          </Box>
        </Container>
      </ThemeProvider>
    </CacheProvider>
  );
}