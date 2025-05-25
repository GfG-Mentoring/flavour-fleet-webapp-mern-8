import { getUserDetails, loginApi } from '@/apis/auth';
import { Button } from '@heroui/button';
import { Input } from '@heroui/input';
import { isAxiosError } from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { loginUser } from '@/actions/auth';
import { useDispatch } from 'react-redux';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const [loginState, setLoginState] = useState({
    email: '',
    password: '',
  });

  const onValueChange = (value: string, fieldName: string) => {
    setLoginState((prev) => ({ ...prev, [fieldName]: value }));
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await loginApi(loginState.email, loginState.password);
      const user = await getUserDetails(data.token);
      dispatch(loginUser({ token: data.token, user }));
    
    } catch (err) {
      if (isAxiosError(err)) {
        const message = err.response?.data?.msg ?? 'Unknown error occured.';
        toast.error(message);
      }
    }
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={onFormSubmit}>
      <Input
        isRequired
        label="Email"
        placeholder="Enter your email"
        type="email"
        value={loginState.email}
        onValueChange={(value) => onValueChange(value, 'email')}
      />
      <Input
        isRequired
        label="Password"
        placeholder="Enter your password"
        type="password"
        value={loginState.password}
        onValueChange={(value) => onValueChange(value, 'password')}
      />
      <p className="text-center text-small">
        Need to create an account?{' '}
        {/* <Link size="sm" onPress={() => setSelected('sign-up')}>
          Sign up
        </Link> */}
      </p>
      <div className="flex gap-2 justify-end">
        <Button type="submit" color="primary">
          Login
        </Button>
      </div>
    </form>
  );
};
