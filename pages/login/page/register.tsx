import React from 'react';
import RegisterForm from '../component/RegisterForm';

const register = () => {
  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign up</h1>
            <p className="text-xs-center">
              <a href="">Have an account?</a>
            </p>
            <RegisterForm></RegisterForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default register;