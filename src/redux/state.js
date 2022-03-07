let store ={
    _state: {
        dialogPage: {
            dialogsData: [
                {name: 'Dima', id: '1'},
                {name: 'Roma', id: '2'},
                {name: 'Misha', id: '3'}
            ],
            messageData: [
                {message: 'Hi'},
                {message: 'Hello'},
                {message: 'Sup'},
                {message: 'Ok'}
            ]
        },
        profilePage: {
            postData: [
                {message: 'Hi'},
                {message: 'Hello'},
                {message: 'My name is Roma'}
            ],
            newPostText: 'someText'
        }
    },
    _callSubscriber(){},

    getState(){
      return this._state;
    },
    subscribe(observe) {
        this._callSubscriber = observe;
    },

    dispatch(action){
        if (action.type === 'ADD-POST'){
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText
            };
            this._state.profilePage.postData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if(action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.text;
            this._callSubscriber(this._state);
        }

    }
}

export const addPostActionCreator = () =>{
    return {
        type: 'ADD-POST'
    };
}

export const updateNewPostActionCreator = (text) =>{
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        text: text
    };
}

window.store = store;
export default store;