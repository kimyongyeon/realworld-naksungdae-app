// *** reduxPage.tsx 파일
// 실제로 Redux 를 사용하는 리액트 컴포넌트이다. (클라이언트 브라우저에서 작동한다.)
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { plusCounter } from '@src/store/counterSlice';
import { RootState } from '@src/store/store';
import HeaderTest from '@src/pages/test/component/Header';

export default function ReduxPage() {
  // 리덕스 상태를 불러온다.
  const counterValue = useSelector((state: RootState) => state.counter.value);

  // 버튼 클릭시, 리덕스 상태를 업데이트 하는 액션을 디스패치한다.
  const dispatch = useDispatch();
  const handlePluseCounter = () => dispatch(plusCounter(10));

  return (
    <div>
      <h1>Redux test</h1>
      <HeaderTest />
      <p>counterValue : {counterValue}</p>

      <button onClick={handlePluseCounter}>counter 증가</button>
    </div>
  );
}
