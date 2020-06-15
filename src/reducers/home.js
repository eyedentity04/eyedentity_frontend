const initialState = {
  data: [],
  edit : {},
  isShow : false,
  success : {show : false, message : ""},
  error : {show : false, message : ""}
};

const homeUser = (state = initialState, action) => {
  switch (action.type) {
    case "POST_ADD":
      return { ...state, data: [action.payload,...state.data ] };
    case "POST_SHOW":
      return { ...state, data: action.payload };
      
    case "POST_ADD_LIKE":
      const dataLike = action.payload;
      const newData = state.data.map(item => {
        if (item._id == dataLike.postId){
          item.likes3 = dataLike.like
          item.likesCount = dataLike.like.length
          return item;
        }
        return item;
      });
      
      return {
        ...state,
        data: newData
      };

    case "USER" : 
      return {...state, data : action.payload}
    case "TAG" : 
      return {...state,data:[...state.data,action.payload]}
    case "EDIT_PROFILE" : 
    return { ...state, edit:[...state.data,action.payload]};
    case "HIDE" :
      return {...state , isShow : false}
    case "SUCCESS" :
      return {...state, success : {show : true, message : action.payload}}
    case "SUCCESS_HIDE" : 
      return {...state, success : {show : false, message : ""}}
    case "ERROR" :
      return {...state, error : {show : true, message : action.payload}}
    case "ERROR_HIDE" : 
      return {...state, error : {show : false, message : ""}}  
    default:
      return state;


  }
};

export default homeUser;
