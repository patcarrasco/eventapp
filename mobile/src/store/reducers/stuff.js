import {TYPE} from '../actions/actionTypes'

const initState = {

}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case TYPE:
            return {
                ...state,
                var: action.payload
            }
        default:
            return state;
    }
}

export default reducer