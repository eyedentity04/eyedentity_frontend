const initialState = {
  data: [],
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


      console.log(state.data)
      return {
        ...state,
        data: newData
      };

    case "USER" : 
      return {...state, data : action.payload}
    case "TAG" : 
      return {...state,data:[...state.data,action.payload]}
    default:
      return state;
  }
};

export default homeUser;
