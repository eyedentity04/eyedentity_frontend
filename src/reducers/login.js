const initialState = {
    data: localStorage.getItem('token'),
  };
  
  const login = (state = initialState, action) => {
    let data = [];
    switch (action.type) {
      case "USER_LOGIN":
        localStorage.setItem('token', action.payload)
        return { ...state, data: [...data, action.payload] };
      default:
        return state;
    }
  };
  export default login;