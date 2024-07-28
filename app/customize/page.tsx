"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CssBaseline, ThemeProvider, createTheme, Container, Box, TextField, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { Typography } from '@mui/material';
import Image from 'next/image';

import CreatePetsButton from '../components/atoms/CreatePetsButton';

const cache = createCache({ key: 'css', prepend: true });

const Customize: React.FC = () => {
  const [petName, setPetName] = useState('');
  const [selectedPetType, setSelectedPetType] = useState('');
  const [selectedPetLook, setSelectedPetLook] = useState('');

  const router = useRouter();

  const handlePetTypeChange = (event: SelectChangeEvent<string>) => {
    setSelectedPetType(event.target.value as string);
  };

  const handlePetLookChange = (event: SelectChangeEvent<string>) => {
    setSelectedPetLook(event.target.value as string);
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
              <CreatePetsButton 
                petName={petName}
                selectedPetType={selectedPetType}
                selectedPetLook={selectedPetLook}
                onSuccess={goToMainPage}
              />
            </form>
          </Box>
        </Container>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default Customize;