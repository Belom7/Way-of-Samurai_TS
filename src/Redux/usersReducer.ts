export type usersPageType = {
    users: UsersType[]
}
export type UsersType = {
    id: number
    img: string
    follow: boolean
    name: string
    status: string
    location: LocationType
}
type LocationType = {
    country: string
    sity: string
}

type ActionType = FollowACType | UnFollowACType | SetUserType
type FollowACType = ReturnType<typeof followAC>
type UnFollowACType = ReturnType<typeof unFollowAC>
type SetUserType = ReturnType<typeof setUsersAC>



let initialState = {
    users: []
}

const FOLLOW = 'FOLLOW'
const UN_FOLLOW = 'UN-FOLLOW'
const SET_USERS = 'SET-USERS'

export const usersReducer = (state: usersPageType = initialState, action: ActionType): usersPageType => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(m => m.id === action.userId ? {...m, follow:true} : m)
            }
        }
        case UN_FOLLOW: {
            return {
                ...state,
                users: state.users.map(m => m.id === action.userId ? {...m, follow:false} : m)
            }
        }
        case SET_USERS:{
            debugger
            return{
                ...state,
                users: [...state.users, ...action.users]
            }
        }
        default:
            return state
    }
}

export const followAC = (userId: number) => {
    return {
        type: FOLLOW,
        userId
    } as const
}

export const unFollowAC = (userId: number) => {
    return {
        type: UN_FOLLOW,
        userId
    } as const
}

export const setUsersAC = (users:any) => {
    return{
        type: SET_USERS,
        users
    } as const
}