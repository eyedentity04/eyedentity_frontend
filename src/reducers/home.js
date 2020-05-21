const initialState = {
  data: [],
  image : {}
};

const homeUser = (state = initialState, action) => {
  switch (action.type) {
    case "POST_ADD":
      return { ...state, data: [...state.data, action.payload] };
    case "POST_SHOW":
      return { ...state, data: action.payload };
    case "USER" : 
      return {...state, data : action.payload}
    case "TAG" : 
      return {...state,data:[...state.data,action.payload]}
    default:
      return state;
  }
};

export default homeUser;
