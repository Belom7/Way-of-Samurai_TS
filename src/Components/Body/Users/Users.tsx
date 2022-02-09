import axios from "axios";
import {usersPageType, UsersType} from "../../../Redux/usersReducer";
import cl from './User.module.css'
import noAvatar from './../../../assets/images/noAvatar.jpeg'

type PropsType = {
    usersPage: usersPageType
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: UsersType[]) => void
}

export const Users = (props: PropsType) => {
    const getUsers = () => {
        if (props.usersPage.users.length === 0) {
            axios.get<{items: UsersType[]}>("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                props.setUsers(response.data.items)
            })
        }
    }

    const unFollowHandler = (userId: number) => {
        props.unFollow(userId)
    }
    const followHandler = (userId: number) => {
        props.follow(userId)
    }
    return (
        <div>
            <h3>Users</h3>
            <button onClick={getUsers}>getUsers</button>
            {props.usersPage.users.map(m => <div key={m.id}>
                <span>
                    <div>
                        <img className={cl.img} alt={'avatarka'}
                             src={m.photos.small != null ? m.photos.small : noAvatar}/>
                    </div>
                    <div>
                        {m.followed ? <button onClick={() => unFollowHandler(m.id)}>Follow</button>
                            : <button onClick={() => followHandler(m.id)}>UnFollow</button>}
                    </div>
                </span>
                <span>
                    <div>{m.name}</div>
                    <div>{m.status}</div>
                </span>
                <span>
                    {/*<div>{m.location.country}</div>*/}
                    {/*<div>{m.location.sity}</div>*/}
                </span>
            </div>)}

        </div>
    )
}