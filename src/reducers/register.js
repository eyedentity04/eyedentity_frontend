const initialState = {
  data: [],
  viaRegister : false
};

const regis = (state = initialState, action) => {
  switch (action.type) {
    case "USER_REGISTER":
      return { ...state, data: [...state.data, action.payload] };
    case "EROR" :
      return {...state, viaRegister : action.payload} 
    default:
      return state;
  }
};
export default regis;


