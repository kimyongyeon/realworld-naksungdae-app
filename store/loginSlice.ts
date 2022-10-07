import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface LoginUser {
  email: string;
  password: string;
}

const initialState: LoginUser = {
  email: '',
  password: '',
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setEmail: (state: LoginUser, action: PayloadAction<string>) => {
      state = { ...state, email: action.payload };
    },
  },
});

export const { setEmail } = loginSlice.actions;
export default loginSlice;

// export interface User {
//   email: string;
//   token: string;
//   username: string;
//   bio: string;
//   image: string;
// }
