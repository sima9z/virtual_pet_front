import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { login } from '../../features/api/auth';
import { checkPets } from '../../features/api/checkPets';

const useLogin = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    error,
    handleSubmit,
  };
};

export default useLogin;