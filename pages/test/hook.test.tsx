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

  // 컴포넌트 랜더링 될때마다 실행
  // useEffect(() => {
  //   console.log('재 렌더링');
  // });

  // 컴포넌트 count 상태가 변경될때마다 실행
  useEffect(() => {
    console.log(count, member);
  }, [count, member]);

  // 컴포넌트 unmount시 1회 실행
  // useEffect(() => {
  //   return () => {
  //     setCount(0);
  //   };
  // }, []);

  // effect안 코드 실행전 항상 실행
  // useEffect(() => {
  //   return () => {
  //     setCount(100);
  //   };
  // });

  // 1회만 실행
  // useEffect(() => {
  //   setMember({
  //     name: '수지',
  //     addr: '서울시 강남구 역삼동',
  //     age: 40,
  //     phone: 1234,
  //   });
  // }, []);

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
          value={member?.name || ''}
          onChange={(e) => setMember({ name: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="">나이 </label>
        <input
          type="text"
          placeholder="나이"
          value={member?.age || 0}
          onChange={(e) => setMember({ age: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="">휴대폰 </label>
        <input
          type="text"
          placeholder="휴대폰"
          value={member?.phone || 0}
          onChange={(e) => setMember({ phone: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="">주소 </label>
        <input
          type="text"
          placeholder="주소"
          value={member?.addr || ''}
          onChange={(e) => setMember({ addr: e.target.value })}
        />
      </div>
      <button onClick={() => setCount((c: number) => c + 1)}>count</button>
    </>
  );
};

export default Counters;
