import reducer from '@src/pages/test/state/bank.reducer';
import { useReducer } from 'react';

const BankView = () => {
  const [money, dispatch] = useReducer(reducer, 0);
  return (
    <>
      <h1>남은금액: {money}</h1>
    </>
  );
};
export default BankView;
