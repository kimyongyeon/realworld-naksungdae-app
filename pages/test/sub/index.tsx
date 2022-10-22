import { MemberFactory } from '@src/pages/test/main/factory/MemberFactory';
import { IMemberService } from '@src/pages/test/main/service/IMemberService';
import { RootState } from '@src/store/store';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Sub = () => {
  const members = useSelector((state: RootState) => state.memberReducer.memberList);
  // 서비스 의존성 주입 및 초기화
  const [memberService] = useState<IMemberService>(MemberFactory.createMemberService());

  useEffect(() => {
    console.log(members, memberService.isAdult(20));
  });

  function handleCountClick(e: React.MouseEvent<HTMLElement>) {
    console.log(members);
  }

  return (
    <>
      <h1>서브화면</h1>
      <p>count : {members.length}</p>
      <button onClick={handleCountClick}>클릭</button>
    </>
  );
};

export default Sub;
