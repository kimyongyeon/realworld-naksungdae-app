import { useReducer } from 'react';

type CartType = {
  totalCount: number;
  shippingFreeYn: boolean; // item이 10개 이상일 경우 무료배송 유무
  item?: any;
};

enum ITEM_SIZE {
  L,
  M,
  S,
}

type ItemType = {
  korName: string; // 한글 아이템명
  engName: string; // 영문 아이템명
  size: ITEM_SIZE; // 사이즈 (S, M, L 이외 추가로 사이즈가 입고해도 처리가능해야 함)
  price: number; // 가격 (사이즈에 따른 가격 변화)
  stockCount: number; // 재고개수 (판매시 수량감소, 입고시 수량증가)
  regDate: string; // 생성일자 (insert : 자동입력)
  updateDate: string; // 수정일자
  useYn: boolean; // 사용유무 (stockCount <= 0 : false)
};

type ActionType = {
  type: string;
  payload?: CartType;
};

// 액션 : 구매, 재구매, 구매취소, 배송
const ACTION_TYPE = {
  SELL: 'sell',
  RE_SELL: 'resell',
  SELL_CANCEL: 'sellcancel',
  SHOPPING: 'shopping',
};

const reducer = (state: Partial<CartType>, action: Partial<ActionType>) => {
  switch (action.type) {
    case ACTION_TYPE.SELL:
      return state.item;
  }
};

const initialState: CartType = {
  totalCount: 0,
  shippingFreeYn: false,
  item: [],
};

const Cart = () => {
  const [item, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h1>장바구니</h1>
      <h2>{item}</h2>

      <p>유저</p>
      <button>구매</button>
      <button>재구매</button>
      <button>구매취소</button>

      <p>관리자</p>
      <button>배송</button>
    </>
  );
};
export default Cart;
