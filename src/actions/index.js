import jsonPlaceholder from '../apis/jsonPlaceholder';

// We are defining a function that returns a function
export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');
    dispatch({ type:"FETCH_POSTS", payload: response.data });
}

export const fetchUser = id => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({ type:"FETCH_USERS", payload: response.data });
}


// export const fetchPosts = () => {
//     return async function(dispatch,getState){
//         const response = await jsonPlaceholder.get('/posts');

//         dispatch({ type:"FETCH_POSTS", payload: response.data });
//     }
// }