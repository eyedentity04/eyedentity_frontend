const initialState = {
  viaLogin: localStorage.getItem("x-access-token"),
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case "USER_LOGIN":
      localStorage.setItem("x-access-token", action.payload);
      return {
        ...state,
        viaLogin: action.payload,
      };

    case "USER_LOGOUT":
      localStorage.removeItem("x-access-token", action.payload);
      return {
        ...state,
        viaLogin: "",
      };

    default:
      return state;
  }
};
export default login;
