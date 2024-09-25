import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { login } from '../../features/api/auth';
import { checkPets } from '../../features/api/checkPets';

const useLogin = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false); 
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const user = await login(email, password);
      console.log('Logged in user:', user);

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
    } finally {
      setIsLoading(false); // ローディング終了
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    error,
    handleSubmit,
    isLoading
  };
};

export default useLogin;