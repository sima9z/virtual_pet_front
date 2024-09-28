"use client";

import React from 'react';
import { TextField, Container, Box, Button, Typography } from '@mui/material';

import useSignup from '../../../hooks/app/useSignup';
import LoadingAnimation from '../../../components/atoms/LoadingAnimation'
import BackButton from '../../../components/atoms/BackButton'

import { mainTheme } from '../../../styles/theme'
import ThemeWrapper from '../../../styles/ThemeWrapper';

export default function Signup() {
  const {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    passwordConfirmation,
    setPasswordConfirmation,
    error,
    handleSubmit,
    isLoading
  } = useSignup(); 

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
            <Button type="submit" variant="contained" color="secondary" sx={{ color: 'white', marginBottom: '15px' }}>
              新規登録
            </Button>
            {error && <Typography color="error">{error}</Typography>}
          </form>
          <Box width="100%" display="flex" justifyContent="flex-end">
            <BackButton />
          </Box>
        </Box>
        <LoadingAnimation isLoading={isLoading} />
      </Container>
    </ThemeWrapper>
  );
}