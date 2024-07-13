"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { TextField, CssBaseline, ThemeProvider, createTheme, Container, Box, Button, Typography, Link } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

const cache = createCache({ key: 'css', prepend: true });

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const router = useRouter();

  const goToPreparation = () => {
    router.push('/preparation');
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
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh" gap="50px">
            <Typography variant="h3">ログイン</Typography>
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
            <Box width="100%" display="flex" justifyContent="space-between" marginTop="1rem">
              <Link href="#" color="secondary" underline="hover">
                パスワードを忘れた場合
              </Link>
              <Box display="flex" flexDirection="column" alignItems="flex-end" gap="10px">
                <Link href="#" color="secondary" underline="hover">
                  新規ユーザー登録
                </Link>
                <Link href="#" color="secondary" underline="hover" onClick={goToPreparation}>
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