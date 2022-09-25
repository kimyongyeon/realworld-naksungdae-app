/**
 * https://haerang94.tistory.com/296
 */
import { css, Global, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

export const globalStyles = (
  <Global
    styles={css`
      html,
      body {
        padding: 3rem 1rem;
        margin: 0;
        background: black;
        min-height: 100%;
        font-family: Helvetica, Arial, sans-serif;
        font-size: 24px;
      }
    `}
  />
);
export const basicStyles = css`
  background-color: white;
  color: cornflowerblue;
  border: 1px solid lightgreen;
  border-right: none;
  border-bottom: none;
  box-shadow: 5px 5px 0 0 lightgreen, 10px 10px 0 0 lightyellow;
  transition: all 0.1s linear;
  margin: 3rem 0;
  padding: 1rem 0.5rem;
`;

export const hoverStyles = css`
  &:hover {
    color: white;
    background-color: lightgray;
    border-color: aqua;
    box-shadow: -15px -15px 0 0 aqua, -30px -30px 0 0 cornflowerblue;
  }
`;

export const Combined = styled.div`
  ${basicStyles};
  ${hoverStyles};
  & code {
    background-color: linen;
  }
`;

/**
 * Hook을 이용한 간단한 입력 / 출력 처리 방법
 */
import { useEffect, useState } from 'react';

interface Member {
  name: string;
  phone: number | string;
  age: number | string;
  addr: string;
}

const Counters = () => {
  const [count, setCount] = useState(0);
  const [member, setMember] = useState<Partial<Member>>(); // 인터페이스를 제네릭으로 쓰는 방법

  useEffect(() => {
    setMember({
      name: '수지',
      addr: '서울시 강남구 역삼동',
      age: 40,
      phone: 1234,
    });
  }, []);

  return (
    <>
      <h1>Couter</h1>
      <p>{count}</p>
      <p>회원정보 : {JSON.stringify(member)}</p>

      <div>
        <label htmlFor="">이름 </label>
        <input
          type="text"
          placeholder="이름"
          value={member?.name}
          onChange={(e) => setMember({ name: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="">나이 </label>
        <input
          type="text"
          placeholder="나이"
          value={member?.age}
          onChange={(e) => setMember({ age: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="">휴대폰 </label>
        <input
          type="text"
          placeholder="휴대폰"
          value={member?.phone}
          onChange={(e) => setMember({ phone: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="">주소 </label>
        <input
          type="text"
          placeholder="주소"
          value={member?.addr}
          onChange={(e) => setMember({ addr: e.target.value })}
        />
      </div>
      <button onClick={() => setCount((c: number) => c + 1)}>count</button>
    </>
  );
};

export default Counters;
