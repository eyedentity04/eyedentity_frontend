const initialState = {
  data: [],
};

const regis = (state = initialState, action) => {
  switch (action.type) {
    case "USER_REGISTER":
      return { ...state, data: [...state.data, action.payload] };
      
    default:
      return state;
  }
};
export default regis;
