import { login, setEmail, setPassword } from '@src/store/userSlice';
import { RootState } from '@src/store/store';
import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const LoginForm = () => {
  const user = useSelector((state: RootState) => state.user);

  const dispatch = useDispatch();

  const { email, password } = user;

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setEmail(e.target.value));
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setPassword(e.target.value));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const resp = await axios.post('https://api.realworld.io/api/users/login', {
        user: { email, password },
      });
      console.log(resp);
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
            onChange={onChangeEmail}
          />
        </fieldset>
        <fieldset className="form-group">
          <input
            className="form-control form-control-lg"
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onChangePassword}
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
