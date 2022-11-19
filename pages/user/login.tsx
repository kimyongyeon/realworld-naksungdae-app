import Link from 'next/link';
import React from 'react';
import LoginForm from '../../component/user/LoginForm';

const login = () => {
  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign in</h1>
            <div className="text-xs-center">
              <Link href="/user/register">Need an account?</Link>
              <LoginForm></LoginForm>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
