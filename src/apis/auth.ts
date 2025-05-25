import { axiosInstance } from '.';

export const loginApi = async (email: string, password: string) => {
  const data = await axiosInstance.post('/user/login', { email, password });
  return data.data;
};

export const getUserDetails = async (token: string) => {
  try {
    const data = await axiosInstance.get('/user/me', {
      headers: {
        Authorization: token,
      },
    });
    return data.data.user;
  } catch (err) {
    console.log('Error in getting user details', err);
  }
};
