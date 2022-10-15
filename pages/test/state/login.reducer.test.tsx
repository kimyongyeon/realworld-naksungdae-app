import { ActionType } from '@src/pages/test/state/cart.test';
import { useReducer } from 'react';

interface LoginInfo {
  userId: string;
  password: string;
}
interface LoginResponse {
  code: number;
  msg: string;

  loginInfo: LoginInfo;
}
const initialState: LoginResponse = {
  code: 0,
  msg: '',
  loginInfo: { userId: '', password: '' },
};

const ACTION_TYPE = {
  LOGIN: 'login',
  LOGOUT: 'logout',
};

const reducer = (state: Partial<LoginResponse>, action: Partial<ActionType>) => {
  switch (action.type) {
    case ACTION_TYPE.LOGIN:
      return { userId: state.loginInfo?.userId, password: state.loginInfo?.password };
  }
};

const Login = () => {
  const [loginInfo, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <form action="/login">
        <input type="text" placeholder="userId" />
        <input type="text" placeholder="password" />
        <button>login</button>
        <button>logout</button>
      </form>
    </>
  );
};

export default Login;
