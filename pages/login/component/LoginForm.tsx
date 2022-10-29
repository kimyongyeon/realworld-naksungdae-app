import { setUser } from '@src/store/authSlice';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const LoginForm = () => {
  const router = useRouter();
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
      const { data } = await axios.post('https://api.realworld.io/api/users/login', {
        user: { email, password },
      });
      dispatch(setUser(data.user));
      router.push('/');
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
