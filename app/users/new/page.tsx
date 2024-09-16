"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { TextField, Container, Box, Button, Typography } from '@mui/material';

import { signup } from '../../../features/api/auth';

import { mainTheme } from '../../../styles/theme'
import ThemeWrapper from '../../../styles/ThemeWrapper';

export default function Login() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const user = await signup(name, email, password, passwordConfirmation);
      console.log('Signed up user:', user);
      router.push('/login');
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred');
      }
    }
  };

  const router = useRouter();

  const goToPreparation = () => {
    router.push('/customize');
  };

  return (
    <ThemeWrapper theme={mainTheme}>
      <Container style={{ padding: '0 2%' }}>
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh">
          <Typography variant="h3" marginBottom="20px">新規ユーザー登録</Typography>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: "100%", maxWidth: "400px", gap: "20px" }}>
            <TextField
              label="name"
              variant="outlined"
              margin="normal"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
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
            <TextField
              label="Password Confirmation"
              type="password"
              variant="outlined"
              margin="normal"
              fullWidth
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              required
            />
            <Button type="submit" variant="contained" color="secondary" sx={{ color: 'white', marginTop: '20px' }}>
              新規登録
            </Button>
            {error && <Typography color="error">{error}</Typography>}
          </form>
        </Box>
      </Container>
    </ThemeWrapper>
  );
}