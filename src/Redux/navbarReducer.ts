type ActionType = any

export type navbarPagesType={
    navbar: navbarType[]
    friends: friendsType[]
}
type navbarType = {
    id:number
    path: string
    title: string
}
export type friendsType = {
    id: number,
    name: string,
    img: string
}


let initialState = {
    navbar : [
        {id:1, path: '/profile', title: 'Профиль'},
        {id:2, path: '/message', title: 'Сообщения'},
        {id:3, path: '/news', title: 'Новости'},
        {id:4, path: '/music', title: 'Музыка'},
        {id:5, path: '/settings', title: 'Настройки'},
        {id:6, path: '/users', title: 'Пользователи'},
    ],
    friends: [
        {id:1, name: 'Sasha', img: 'https://cspromogame.ru//storage/upload_images/avatars/1299.jpg'},
        {id:2, name: 'Yulia', img: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg'},
        {id:3, name: 'Evgen', img: 'https://i.pinimg.com/236x/73/b0/c0/73b0c08a5d1578cb976a00d8665ffd77--all-blacks-rugby-wutang.jpg'}
    ]
}


export const navbarReducer = (state:navbarPagesType = initialState, action: ActionType):navbarPagesType => {
    switch (action.type) {
        default: return state
    }
}


