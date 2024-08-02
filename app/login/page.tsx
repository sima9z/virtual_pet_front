"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { TextField, CssBaseline, ThemeProvider, createTheme, Container, Box, Button, Typography, Link } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

import { login } from '../api/auth';
import { checkPets } from '../api/checkPets';

const cache = createCache({ key: 'css', prepend: true });

export default function Login() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const user = await login(email, password);
      console.log('Logged in user:', user);

      // ペットの存在をチェックするAPIを呼び出し
      const data = await checkPets();
      console.log('Pets exist:', data.pets_exist);
      if (data.pets_exist) {
        router.push('/main');
      } else {
        router.push('/customize');
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred');
      }
    }
  };
  
  const goToPreparation = () => {
    router.push('/customize');
  };

  const goToPreparation2 = () => {
    router.push('/users/new');
  };

  const unimplementedAlert = () =>{
    alert(`未実装です`);
  }

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
            <Typography variant="h3" marginBottom="50px">ログイン</Typography>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: "100%", maxWidth: "400px", gap: "30px" }}>
              <TextField
                label="Email"
                variant="outlined"
                margin="normal"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                margin="normal"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Button type="submit" variant="contained" color="secondary" sx={{ color: 'white', marginTop: '50px' }}>
                ログイン
              </Button>
            </form>
            {error && <Typography color="error">{error}</Typography>}
            <Box width="100%" display="flex" justifyContent="space-between" marginTop="1rem">
              <Link href="#" color="secondary" underline="hover" onClick={unimplementedAlert}>
                パスワードを忘れた場合
              </Link>
              <Box display="flex" flexDirection="column" alignItems="flex-end" gap="10px">
                <Link href="#" color="secondary" underline="hover" onClick={goToPreparation2}>
                  新規ユーザー登録
                </Link>
                <Link href="#" color="secondary" underline="hover" onClick={unimplementedAlert}>
                  ゲストでログインする
                </Link>
              </Box>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </CacheProvider>
  );
}