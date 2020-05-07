const initialState = {
  data: [],
};

const regis = (state = initialState, action) => {
  let data = [];
  switch (action.type) {
    case "USER_REGISTER":
      data = state.data;
      return { ...state, data: [...data, action.payload] };
    default:
      return state;
  }
};
export default regis;
