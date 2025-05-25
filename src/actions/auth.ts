export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

export const loginUser = (payload: {
  token: string;
  user: {
    email: string;
    fullName: string;
    id: string;
  };
}) => ({
  type: LOGIN_USER,
  payload,
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
});
