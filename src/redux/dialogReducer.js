const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE_TEXT = 'SEND-MESSAGE-TEXT';

let initialState = {
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
}

const dialogReducer = (state = initialState, action) =>{

    switch (action.type) {
        case SEND_MESSAGE_TEXT:
            let newMessage = {
                id: 5,
                message: state.newMessageText
            };
            state.messageData.push(newMessage);
            state.newMessageText = '';
            break;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.text;
            break;
        default :
            break;
    }
    return state;
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE_TEXT});
export const updateNewMessageCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, text: text});

export default dialogReducer;