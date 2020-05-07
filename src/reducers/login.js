const initialState = {
    data: [],
  };
  
  const login = (state = initialState, action) => {
    let data = [];
    switch (action.type) {
      case "USER_LOGIN":
        data = state.data;
        return { ...state, data: [...data, action.payload] };
      default:
        return state;
    }
  };
  export default login;