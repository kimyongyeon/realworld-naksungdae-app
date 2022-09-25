import HeaderTest from '@src/pages/test/component/Header';

/**
 * 부모에서 자식으로 데이터를 전송하는 방법
 */
type propType = {
  title: string;
};
const Board = () => {
  return (
    <>
      <h1>Board</h1>
      <Recommend title={'hello'} />
    </>
  );
};

export const Recommend = (prop: propType) => {
  return (
    <>
      <h1>Recommend {prop.title}</h1>
      <HeaderTest />
    </>
  );
};

export default Board;
