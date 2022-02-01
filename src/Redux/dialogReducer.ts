import {actionType, dialogsPageType} from "./state";

const ADD_MASSAGE = 'ADD-MASSAGE'
const CHANGE_NEW_MASSAGE_TEXT = 'CHANGE-NEW-MASSAGE-TEXT'


export const dialogReducer = (state: dialogsPageType, action: actionType) => {
    switch (action.type) {
        case CHANGE_NEW_MASSAGE_TEXT:
            state.newDialogMessage = action.text
            return state
        case ADD_MASSAGE:
            let message = state.newDialogMessage
            let newMessage = {message: message}
            state.arrMessage.push(newMessage)
            return state
        default: return state
    }
}


export const changeNewMassageAC = (text: string) => {
    return {
        type: 'CHANGE-NEW-MASSAGE-TEXT',
        text: text
    } as const
}

export const addMessageAC = () => {
    return {
        type: 'ADD-MASSAGE',
    } as const
}