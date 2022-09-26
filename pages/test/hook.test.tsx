/**
 * Hook을 이용한 간단한 입력 / 출력 처리 방법
 */
import HeaderTest from '@src/pages/test/component/Header';
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
      <HeaderTest />
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
