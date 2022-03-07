const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postData: [
        {message: 'Hi'},
        {message: 'Hello'},
        {message: 'My name is Roma'}
    ],
    newPostText: 'someText'
}

const profileReducer = (state = initialState, action) =>{
    switch (action.type ) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText
            };
            state.postData.push(newPost);
            state.newPostText = '';
            break;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.text;
            break;
        default:
            break;
    }
    return state;
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, text: text});

export default profileReducer;