const reducer = (state: any, action: any) => {
  console.log('리듀서가 일 합니다.', state, action);
  switch (action.type) {
    case 'deposit':
      return state + action.payload;
    case 'withdrew':
      return state - action.payload;
    default:
      return state;
  }
};

export default reducer;
