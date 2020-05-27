const initialState = {
    data: []
  };
  
  const commentUser = (state = initialState, action) => {
    switch (action.type) {
      case "COMMENT_POST":	   
        return { ...state, data: [ action.payload,...state.data] };	     
      case "COMMENT_SHOW":	
        return { ...state, data: action.payload };
      default:
        return state;
    }
  };
  
  export default commentUser;
  
