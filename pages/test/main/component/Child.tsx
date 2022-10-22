import styled from '@emotion/styled';
import { RootState } from '@src/store/store';
import React from 'react';
import { useSelector } from 'react-redux';

interface Props {
  name: string;
  age: number;
}

const Container = styled.div`
  border: 5px solid red;
  padding: 10px;
  margin: 10px;
`;

const Child = (props: Props) => {
  // 전역으로 어떻게 가져올까?
  // const [count, setCount] = useState(0);
  const list = useSelector((state: RootState) => state.memberReducer.memberList);

  // useEffect(() => {
  //   setCount(list.length);
  // });

  function handleCountClick(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    // setCount(list.length);
  }

  return (
    <>
      <Container>
        <h1>안녕 Child</h1>
        <p>{list.length}</p>
        <p>이름 : {props.name}</p>
        <p>나이 : {props.age}</p>
        <button onClick={handleCountClick}>회원정보 전체 수</button>
      </Container>
    </>
  );
};

export default Child;
