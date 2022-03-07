import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";

let store ={
    _state: {
        dialogPage: {
            dialogsData: [
                {name: 'Dima', id: '1'},
                {name: 'Roma', id: '2'},
                {name: 'Misha', id: '3'}
            ],
            messageData: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Hello'},
                {id: 3, message: 'Sup'},
                {id: 4, message: 'Ok'}
            ],
            newMessageText: ''
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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogPage = dialogReducer(this._state.dialogPage, action);

        this._callSubscriber(this._state);
    }
}


window.store = store;
export default store;