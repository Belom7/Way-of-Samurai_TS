export type profilePageType={
    arrPosts:arrPostsType[]
}
export type arrPostsType={
    name:string
    message:string
    likeCount:number
}

export type dialogsPageType={
    arrName:arrNameType[]
    arrMessage:arrMessageType[]
}
export type arrNameType={
    id:number
    name:string
    img: string
}
type arrMessageType={
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



export const state = {
    profilePage: {
        arrPosts : [
            {name: 'Yulia', message: 'Hi!', likeCount: 5},
            {name: 'Anastasiya', message: 'Hi bro!', likeCount: 7},
            {name: 'Boris', message: 'Chepushila!', likeCount: 10},
        ]
    },
    dialogsPage: {
        arrName : [
            {id: 1, name: 'Maks' , img: 'https://www.blast.hk/attachments/64804/'},
            {id: 2, name: 'Yulia', img: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg'},
            {id: 3, name: 'Sasha', img: 'https://cspromogame.ru//storage/upload_images/avatars/1299.jpg'},
            {id: 4, name: 'Evgen', img: 'https://i.pinimg.com/236x/73/b0/c0/73b0c08a5d1578cb976a00d8665ffd77--all-blacks-rugby-wutang.jpg'},
            {id: 5, name: 'Ivan', img: 'http://sun9-1.userapi.com/sun9-74/s/v1/if1/FKF7voRzQ0sWelF0IyEFUAW7Ggg1PpZciQwwndr8y9MX5tmbkXbEjF2fn0vg_zNJpLt4NTm3.jpg?size=200x406&quality=96&crop=0,0,286,582&ava=1'},
        ],
        arrMessage : [
            {message: 'Hi'},
            {message: 'Bay'},
            {message: 'Fack you!'},
            {message: 'ha-ha'},
        ],
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
}