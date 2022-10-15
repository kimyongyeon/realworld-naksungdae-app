import axios from 'axios';
import React, { useState } from 'react';

const LoginForm = () => {
  const [account, setAccount] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const { email, password } = account;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccount({ ...account, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const resp = await axios.post('https://api.realworld.io/api/users/login', { user: account });
      console.log(resp);
    } catch (err) {
      setError('Error!');
    }
  };
  return (
    <>
      {error === '' || (
        <ul className="error-messages">
          <li>{error}</li>
        </ul>
      )}

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
          Sign
        </button>
      </form>
    </>
  );
};

export default LoginForm;
