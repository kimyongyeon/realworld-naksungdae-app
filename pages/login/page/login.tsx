import React from 'react';
import LoginForm from '../component/LoginForm';

const login = () => {
  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign in</h1>
            <div className="text-xs-center">
              <a href="">Need an account?</a>
              <LoginForm></LoginForm>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
