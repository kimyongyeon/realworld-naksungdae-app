import styled from '@emotion/styled';
import { listenerCancelled } from '@reduxjs/toolkit/dist/listenerMiddleware/exceptions';
import Child from '@src/pages/test/main/component/Child';
import { Member } from '@src/pages/test/main/domain/Member';
import { MemberFactory } from '@src/pages/test/main/factory/MemberFactory';
import { IMemberService } from '@src/pages/test/main/service/IMemberService';
import { MemberType } from '@src/pages/test/main/store/MemberType';
import { RootState } from '@src/store/store';
import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Container = styled.div`
  padding: 20px;
  margin: 5px;
`;

// mobx, rxjs...

// root-node -> sub-node... -> sub-node : redux..

// state
// page1 => page2

// client , server 상태

const Main = () => {
  const members = useSelector((state: RootState) => state.memberReducer.memberList);

  // 상태 값 입니다.
  const [gender, setGender] = useState('');
  const [age, setAge] = useState(0);
  const [name, setName] = useState('');
  const [adult, setAdult] = useState('');

  // 서비스 의존성 주입 및 초기화
  const [memberService] = useState<IMemberService>(MemberFactory.createMemberService());

  function jsonTest() {
    memberService.requestTestJson().then((m: Member) => {
      setAge(m.age);
      setGender(m.gender);
      setName(m.userName);
      setAdult(memberService.isAdult(m.age));
    });
  }

  // 초기화 1회만 호출 합니다.
  useEffect(() => {
    jsonTest();
  }, []);

  function handleSave(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    memberService.saveMember(Member.createMember(name, age, gender));
  }

  function handleDetail(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
  }

  function handleList(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
  }

  return (
    <>
      <Container>
        <h1>Main</h1>
        <p>이름: {name}</p>
        <p>성별 : {gender}</p>
        <p>나이 : {age}</p>
        <p>성인여부 : {adult}</p>

        <h2>전체 회원수: {members.length}</h2>

        <Child name={name} age={age} />

        <fieldset>
          <input
            type="text"
            placeholder="성별"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <input
            type="text"
            placeholder="이름"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <input
            type="number"
            placeholder="나이"
            value={age}
            onChange={(e) => setAge(parseInt(e.target.value))}
          />
        </fieldset>
        <button onClick={handleSave}>회원저장</button>
        <button onClick={handleDetail}>로드</button>
        <button onClick={handleList}>리스트</button>

        <ul>
          {members.map((member: MemberType) => (
            <li key={Math.random() * 1000}>{`${member.name}|${member.age}|${member.gender}`}</li>
          ))}
        </ul>
      </Container>
    </>
  );
};

export default Main;
