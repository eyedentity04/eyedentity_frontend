const initialState = {
  viaLogin: localStorage.getItem("user") 
};


const login = (state = initialState, action) => {
  
  switch (action.type) {
    case "USER_LOGIN":
    localStorage.setItem("user", JSON.stringify(action.payload));
      return {
        ...state,
        viaLogin: action.payload
      };
      
    case "USER_LOGOUT":
      localStorage.removeItem("user", action.payload);
      return {
        ...state,
        viaLogin: "",
      };

    default:
      return state;
  }
};
export default login;
