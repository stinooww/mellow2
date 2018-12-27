import { FETCH_POSTS, NEW_POSTS} from "../actions/types";

const initialState = {
    items: [],
    item: {}
}
// evalueert welk type we mee te maken hebben, action zal een type bevatte
export default function(state =  initialState, action) {
    switch(action.type) {
        case FETCH_POSTS:
            return {
            ...state,
                items: action.payload
        };
        default:
            return state;

    }
}