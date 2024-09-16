"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { TextField, Container, Box, Button, Typography } from '@mui/material';

import NavigationLink from '../../components/atoms/NavigationLink';

import { login } from '../../features/api/auth';
import { checkPets } from '../../features/api/checkPets';

import { mainTheme } from '../../styles/theme'
import ThemeWrapper from '../../styles/ThemeWrapper';

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
  
  return (
    <ThemeWrapper theme={mainTheme}>
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
            <NavigationLink href="#" label="パスワードを忘れた場合" alertMessage="未実装です" />
            <Box display="flex" flexDirection="column" alignItems="flex-end" gap="10px">
              <NavigationLink href="/users/new" label="新規ユーザー登録" />
              <NavigationLink href="#" label="ゲストでログインする" alertMessage="未実装です" />
            </Box>
          </Box>
        </Box>
      </Container>
    </ThemeWrapper>
  );
}