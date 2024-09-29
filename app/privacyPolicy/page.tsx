"use client";

import React from 'react';
import { Box, Typography } from '@mui/material';

import { subTheme } from '../../styles/theme'
import ThemeWrapper from '../../styles/ThemeWrapper';

const privacyPolicy = () => {
  return (
    <ThemeWrapper theme={subTheme}>
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh" margin="0 20vh 0 20vh">
        <Typography variant="h3" margin="11vh" marginBottom="3vh">プライバシーポリシー</Typography>

        <Typography variant="h5" marginBottom="20px">お客様から取得する情報</Typography>
        <Typography marginBottom="10px">当アプリでは、お客様から以下の情報を取得します。</Typography>
        <Typography marginBottom="20px">
          <Typography>・氏名(ニックネームやペンネームも含む)</Typography>
          <Typography>・メールアドレス</Typography>
          <Typography>・外部サービス連携により取得した情報（設定により制限されます）</Typography>
          <Typography>・Cookie(クッキー)を用いて生成された識別情報</Typography>
        </Typography>
        
        <Typography variant="h5" marginBottom="20px">情報の利用目的</Typography>
        <Typography marginBottom="10px">取得した情報は、以下の目的で利用します。</Typography>
        <Typography marginBottom="20px">
          <Typography>・本人確認・認証</Typography>
          <Typography>・お問い合わせへの対応</Typography>
          <Typography>・サービス改善のための分析</Typography>
        </Typography>

        <Typography variant="h5" marginBottom="20px">第三者提供</Typography>
        <Typography marginBottom="20px">個人情報は、ユーザーの同意なく第三者に提供しません。</Typography>
        
        <Typography variant="h5" marginBottom="20px">プライバシーポリシーの変更</Typography>
        <Typography marginBottom="20px">必要に応じてプライバシーポリシーを変更する場合があります。変更内容は適切な方法で通知します。</Typography>
        
        <Typography variant="h5" marginBottom="20px">お問い合わせ</Typography>
        <Typography>情報の開示・訂正・削除の希望がある場合は、下記のメールアドレスまでご連絡ください。</Typography>
        <Typography marginBottom="100px">e-mail: rights.data9@gmail.com</Typography>

      </Box>
    </ThemeWrapper>
  );
};

export default privacyPolicy;