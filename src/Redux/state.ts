import {addMessageAC, changeNewMassageAC, dialogReducer} from "./dialogReducer";
import {addPostAC, changeNewPostTextAC, profileReducer} from "./profileReducer";

export type storeType = {
    _state:stateType
    getState:()=>stateType
    dispatch:(action:actionType)=>void
    subscribe:(observer:()=>void)=>void
    rerender:()=>void
}

export type stateType = {
    profilePage:profilePageType
    dialogsPage:dialogsPageType
    navbarPages:navbarPagesType
}

export type profilePageType={
    arrPosts:postsType[]
    newPostText:string
}
export type postsType={
    id:number
    name:string
    message:string
    likeCount:number
}

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
}

export type navbarPagesType={
    navbar: navbarType[]
    friends: friendsType[]
}
type navbarType = {
    path: string,
    title: string
}
export type friendsType = {
    id: number,
    name: string,
    img: string
}




export type actionType = addPostType | changeNewPostType | addMessageType | changeNewMessageText
export type addPostType = ReturnType<typeof addPostAC>
export type changeNewPostType = ReturnType<typeof changeNewPostTextAC>
export type addMessageType = ReturnType<typeof addMessageAC>
export type changeNewMessageText = ReturnType<typeof changeNewMassageAC>



export let store:storeType = {
    _state: {
        profilePage: {
            arrPosts : [
                {id:1, name: 'Yulia', message: 'Hi!', likeCount: 5},
                {id:2, name: 'Anastasiya', message: 'Hi bro!', likeCount: 7},
                {id:3, name: 'Boris', message: 'Chepushila!', likeCount: 10},
            ],
            newPostText : ''
        },
        dialogsPage: {
            arrName : [
                {id: 1, name: 'Maks' , img: 'https://www.blast.hk/attachments/64804/'},
                {id: 2, name: 'Yulia', img: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg'},
                {id: 3, name: 'Sasha', img: 'https://cspromogame.ru//storage/upload_images/avatars/1299.jpg'},
                {id: 4, name: 'Evgen', img: 'https://i.pinimg.com/236x/73/b0/c0/73b0c08a5d1578cb976a00d8665ffd77--all-blacks-rugby-wutang.jpg'},
                {id: 5, name: 'Ivan', img: 'https://sun9-1.userapi.com/sun9-74/s/v1/if1/FKF7voRzQ0sWelF0IyEFUAW7Ggg1PpZciQwwndr8y9MX5tmbkXbEjF2fn0vg_zNJpLt4NTm3.jpg?size=200x406&quality=96&crop=0,0,286,582&ava=1'},
            ],
            arrMessage : [
                {message: 'Hi'},
                {message: 'Bay'},
                {message: 'Fack you!'},
                {message: 'ha-ha'},
            ],
            newDialogMessage: ''
        },
        navbarPages: {
            navbar : [
                {path: '/profile', title: 'Профиль'},
                {path: '/message', title: 'Сообщения'},
                {path: '/news', title: 'Новости'},
                {path: '/music', title: 'Музыка'},
                {path: '/settings', title: 'Настройки'},
            ],
            friends: [
                {id:1, name: 'Sasha', img: 'https://cspromogame.ru//storage/upload_images/avatars/1299.jpg'},
                {id:2, name: 'Yulia', img: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg'},
                {id:3, name: 'Evgen', img: 'https://i.pinimg.com/236x/73/b0/c0/73b0c08a5d1578cb976a00d8665ffd77--all-blacks-rugby-wutang.jpg'}
            ]
        }
    },
    getState() {return this._state},
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action)
        this.rerender()
    },
    subscribe (observer:()=>void)  {
        this.rerender = observer
    },
    rerender ()  {
        console.log('State is changed')
    },
}

declare global {
    interface Window {
        store:any;
    }
}

window.store = store