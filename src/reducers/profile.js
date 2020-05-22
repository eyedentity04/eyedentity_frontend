const initialState = {
    data: [],
  };
  
  const profileUser = (state = initialState, action) => {
    switch (action.type) {
      case "POST_SHOW":
        return { ...state, data: action.payload };
      default:
        return state;
    }
  };
  
  export default profileUser;