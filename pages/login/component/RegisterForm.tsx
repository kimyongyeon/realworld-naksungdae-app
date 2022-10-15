import { RootState } from '@src/store/store';
import { login, setEmail, setPassword, setUsername } from '@src/store/userSlice';
import axios from 'axios';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const RegisterForm = () => {
  const user = useSelector((state: RootState) => state.user);

  const dispatch = useDispatch();

  const { username, email, password } = user;

  const onChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setUsername(e.target.value));
  };

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setEmail(e.target.value));
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setPassword(e.target.value));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const resp = await axios.post('https://api.realworld.io/api/users', {
        user: {
          username,
          email,
          password,
        },
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
            placeholder="Username"
            name="username"
            value={username}
            onChange={onChangeUsername}
          />
        </fieldset>
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
          Sign up
        </button>
      </form>
    </>
  );
};

export default RegisterForm;
