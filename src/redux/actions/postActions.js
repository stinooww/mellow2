import { FETCH_POSTS, NEW_POSTS} from "./types";

export const fetchPosts = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/photos')
            .then( res => res.json())
            .then ( posts => dispatch({
                type: FETCH_POSTS,
                payload: posts
            }));
}