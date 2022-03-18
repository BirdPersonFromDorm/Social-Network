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
    ]
}

const dialogReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE_TEXT: {
            return {
                ...state,
                messageData: [...state.messageData, {id: 5, message: action.newMessageBody}]
            };
        }
        default :
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE_TEXT, newMessageBody});

export default dialogReducer;