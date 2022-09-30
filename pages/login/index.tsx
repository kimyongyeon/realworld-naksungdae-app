import Input from './component/Input';
import axios from 'axios';
import React, { useState } from 'react';

function Login() {
  // 스타일 임시
  const div_1 = {
    margin: '0 auto',
    width: '300px',
    marginTop: '20px',
  };

  const div_2 = {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    gap: '10px',
  };

  const h1 = {
    textAlign: 'center !important',
  };

  const p = {
    textAlign: 'center !important',
    color: '#5CB85C',
  };

  const button = {
    width: '100px',
    height: '50px',
    margin: '0 0 0 auto',
    display: 'inline-block',
    fontWeight: 'normal',
    lineHeight: '1.25',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    verticalAlign: 'middle',
    cursor: 'pointer',
    userSelect: 'none',
    border: '1px solid transparent',
    color: '#fff',
    backgroundColor: '#5CB85C',
    borderColor: '#5CB85C',
    padding: '0.75rem 1.5rem',
    fontSize: '1.25rem',
    borderRadius: '0.3rem',
  };

  /**
   * 기입한 이메일, 비밀번호 저장
   */
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');

  /**
   * @param e
   * 입력받은 이메일, 비밀번호 state에 저장
   */
  const emailChange = (e) => {
    setEmail(e.target.value);
  };

  const pwChange = (e) => {
    setPw(e.target.value);
  };

  return (
    <div style={div_1}>
      <h1 style={h1}> Sign in </h1>
      <p style={p}> Need an account? </p>
      <div style={div_2}>
        <Input type="email" onChange={emailChange} />
        <Input type="password" onChange={pwChange} />
        <button
          style={button}
          onClick={() => {
            axios
              .post('https://api.realworld.io/api/users/login', {
                user: { email: email, password: pw },
              })
              .then((result) => {
                console.log('result : ' + JSON.stringify(result));
                console.log('user token : ' + result.data.user.token);
                alert('로그인 성공');
              })
              .catch((error) => {
                if (error.response) {
                  // 요청이 전송되었고, 서버는 2xx 외의 상태 코드로 응답
                  console.log(error.response.data);
                  console.log(error.response.status);
                  console.log(error.response.headers);
                } else if (error.request) {
                  // 요청이 전송되었지만, 응답이 수신되지 않음
                  console.log(error.request);
                } else {
                  // 오류가 발생한 요청을 설정하는 동안 문제가 발생
                  console.log('Error', error.message);
                }
                console.log(error.config);
              });
          }}
        >
          Sign in
        </button>
      </div>
    </div>
  );
}

export default Login;