"use client";

import React from 'react';
import { TextField, Container, Box, Button, Typography, CircularProgress } from '@mui/material';

import NavigationLink from '../../components/atoms/NavigationLink';
import LoadingAnimation from '../../components/atoms/LoadingAnimation'

import useLogin from '../../hooks/app/useLogin';

import { mainTheme } from '../../styles/theme'
import ThemeWrapper from '../../styles/ThemeWrapper';

export default function Login() {
  const {
    email,
    setEmail,
    password,
    setPassword,
    error,
    handleSubmit,
    isLoading
  } = useLogin(); 

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await handleSubmit(event);
  };

  const bucketName = process.env.NEXT_PUBLIC_AWS_BUCKET_NAME;
  const region = process.env.NEXT_PUBLIC_AWS_REGION;
  
  return (
    <ThemeWrapper theme={mainTheme}>
      <Container style={{ padding: '0 2%' }}>
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh">
          <Typography variant="h3" marginBottom="50px">ログイン</Typography>
          <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: "100%", maxWidth: "400px", gap: "30px" }}>
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
            {/* ローディング中はボタンを無効化してスピナーを表示 */}
            {isLoading ? (
              <CircularProgress sx={{ marginTop: '50px' }} />
            ) : (
              <Button type="submit" variant="contained" color="secondary" sx={{ color: 'white', marginTop: '50px' }}>
                ログイン
              </Button>
            )}
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
        <LoadingAnimation isLoading={isLoading} />
      </Container>
    </ThemeWrapper>
  );
}