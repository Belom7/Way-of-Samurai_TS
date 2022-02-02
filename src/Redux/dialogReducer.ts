export type dialogsPageType={
    arrName:nameType[]
    arrMessage:messageType[]
    newDialogMessage:string
}
export type nameType={
    id:number
    name:string
    img: string
}
type messageType={
    message:string
    id:number
}

export type DialogsActionType = AddMessageACType | ChangeNewMassageACType
type AddMessageACType = ReturnType<typeof addMessageAC>
type ChangeNewMassageACType = ReturnType<typeof changeNewMassageAC>

const ADD_MASSAGE = 'ADD-MASSAGE'
const CHANGE_NEW_MASSAGE_TEXT = 'CHANGE-NEW-MASSAGE-TEXT'

let initialState = {
    arrName : [
        {id: 1, name: 'Maks' , img: 'https://www.blast.hk/attachments/64804/'},
        {id: 2, name: 'Yulia', img: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg'},
        {id: 3, name: 'Sasha', img: 'https://cspromogame.ru//storage/upload_images/avatars/1299.jpg'},
        {id: 4, name: 'Evgen', img: 'https://i.pinimg.com/236x/73/b0/c0/73b0c08a5d1578cb976a00d8665ffd77--all-blacks-rugby-wutang.jpg'},
        {id: 5, name: 'Ivan', img: 'https://sun9-1.userapi.com/sun9-74/s/v1/if1/FKF7voRzQ0sWelF0IyEFUAW7Ggg1PpZciQwwndr8y9MX5tmbkXbEjF2fn0vg_zNJpLt4NTm3.jpg?size=200x406&quality=96&crop=0,0,286,582&ava=1'},
    ],
    arrMessage : [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Bay'},
        {id: 3, message: 'Fack you!'},
        {id: 4, message: 'ha-ha'},
    ],
    newDialogMessage: ''
}


export const dialogReducer = (state: dialogsPageType = initialState, action: DialogsActionType):dialogsPageType => {
    switch (action.type) {
        case CHANGE_NEW_MASSAGE_TEXT:{
            return{
                ...state,
                newDialogMessage:action.text
            }
        }
        case ADD_MASSAGE:{
            let newMessage = {message: state.newDialogMessage, id:7}
            return{
                ...state,
                arrMessage: state.arrMessage.concat(newMessage)
            }
        }
        default: return state
    }
}


export const changeNewMassageAC = (text: string) => {
    return {
        type: CHANGE_NEW_MASSAGE_TEXT,
        text: text
    } as const
}

export const addMessageAC = () => {
    return {
        type: ADD_MASSAGE,
    } as const
}