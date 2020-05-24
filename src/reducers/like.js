const initialState = {
    data :[]
}

const likeUser = (state = initialState,action) =>{
    switch (action.type){
        case "LIKE_POST":
            return {...state,data:[...state.data,action.payload]}
        case "LIKE_SHOW" :
            return {...state,data:action.payload}
        default :
            return state
    }
}

export default likeUser