import { setEmail } from '@src/store/loginSlice';
import { RootState } from '@src/store/store';
import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const LoginForm = () => {
  const loginUser = useSelector((state: RootState) => state.login);

  const dispatch = useDispatch();

  const { email, password } = loginUser;

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    dispatch(setEmail(e.target.value));
  };

  return (
    <>
      <form>
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
