import { createSlice } from '@reduxjs/toolkit';

const initialAuthState: any = {
  token: null,
  user: {
    fullName: null,
    email: null,
    id: null,
  },
};

const getInitAuth = (): Record<string, unknown> => {
  try {
    const userData = localStorage.getItem('auth') ?? `${initialAuthState}`;
    return JSON.parse(userData);
  } catch (err) {
    return initialAuthState;
  }
};

const authSlice = createSlice({
  name: 'auth',
  initialState: getInitAuth(),
  reducers: {
    loginUser: (state, action) => {
      const { token, user } = action.payload;
      const newState = { ...state, token, user };

      if (token && user.id) {
        localStorage.setItem('auth', JSON.stringify(newState));
        window.location.replace('/');
      }
      return newState;
    },
    logoutUser: () => {
      // clear the localstorage
      localStorage.removeItem('auth');
      // set initial auth state
      const newState = initialAuthState;
      // send to login page
      window.location.replace('/login');
      return newState;
    },
  },
});

export const { loginUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;

// import { LOGIN_USER, LOGOUT_USER } from '@/actions/auth';

// const initialAuthState = {
//   token: null,
//   user: {
//     fullName: null,
//     email: null,
//     id: null,
//   },
// };

// const getInitAuth = () => {
//   try {
//     const userData = localStorage.getItem('auth') ?? `${initialAuthState}`;
//     return JSON.parse(userData);
//   } catch (err) {
//     return initialAuthState;
//   }
// };

// export const auth = (state = getInitAuth(), action) => {
//   switch (action?.type) {
//     case LOGIN_USER: {
//       const { token, user } = action.payload;
//       const newState = { ...state, token, user };
//       if (token && user.id) {
//         localStorage.setItem('auth', JSON.stringify(newState));
//         window.location.replace('/');
//       }
//       return newState;
//     }
//     case LOGOUT_USER: {
//       // clear the localstorage
//       localStorage.removeItem('auth');
//       // set initial auth state
//       const newState = initialAuthState;
//       // send to login page
//       window.location.replace('/login');
//       return newState;
//     }
//     default:
//       return state;
//   }
// };
