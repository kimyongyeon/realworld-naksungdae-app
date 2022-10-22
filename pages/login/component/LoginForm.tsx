import { login } from '@src/store/userSlice';
import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const LoginForm = () => {
  const [account, setAccount] = useState({
    email: '',
    password: '',
  });

  const { email, password } = account;

  const dispatch = useDispatch();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccount({ ...account, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const resp = await axios.post('https://api.realworld.io/api/users/login', {
        user: { email, password },
      });
      dispatch(login(resp.data.user));
    } catch (err) {}
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <fieldset className="form-group">
          <input
            className="form-control form-control-lg"
            type="text"
            placeholder="Email"
            name="email"
            value={email}
            onChange={onChange}
          />
        </fieldset>
        <fieldset className="form-group">
          <input
            className="form-control form-control-lg"
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onChange}
          />
        </fieldset>
        <button className="btn btn-lg btn-primary pull-xs-right" type="submit">
          Sign in
        </button>
      </form>
    </>
  );
};

export default LoginForm;