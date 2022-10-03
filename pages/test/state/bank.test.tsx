import reducer from '@src/pages/test/state/bank.reducer';
import BankView from '@src/pages/test/state/component/bank.view';
import { useReducer, useState } from 'react';

const ACTION_TYPES = {
  deposit: 'deposit',
  withdrew: 'withdrew',
};

const MoneyBank = () => {
  const [number, setNumber] = useState(0);
  const [money, dispatch] = useReducer(reducer, 0);
  return (
    <>
      <h1>리듀서 뱅크</h1>
      <p>남은 금액: {money}</p>
      <BankView />
      <input
        type="number"
        step="1000"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={(e) => dispatch({ type: ACTION_TYPES.deposit, payload: number })}>
        입금
      </button>
      <button onClick={(e) => dispatch({ type: ACTION_TYPES.withdrew, payload: number })}>
        출금
      </button>
    </>
  );
};

export default MoneyBank;
