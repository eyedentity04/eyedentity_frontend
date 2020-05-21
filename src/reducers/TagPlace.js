import {GET_LOCATION} from '.././actioncreators/Type'

const initialState = {
    coords: {
        latitude : 0,
        longitude : 0
    }
}

const location = (state = initialState,action)=>{
    switch(action.type){
        case GET_LOCATION :
            return {...state , coords : action.payload}
        default :
            return state
    }
}

export default location