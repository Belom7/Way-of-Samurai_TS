import {usersPageType} from "../../../Redux/usersReducer";
import cl from './User.module.css'

type UsersType = {
    usersPage: usersPageType
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: any) => void
}

export const Users = (props: UsersType) => {

    const img1 = 'https://www.blast.hk/attachments/64804/'
    const img2 = 'https://i.pinimg.com/236x/73/b0/c0/73b0c08a5d1578cb976a00d8665ffd77--all-blacks-rugby-wutang.jpg'
    const img3 = 'https://cspromogame.ru//storage/upload_images/avatars/1299.jpg'

    if (props.usersPage.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    img: img1,
                    follow: true,
                    name: 'Maks',
                    status: 'I am samurai',
                    location: {country: 'Russia', sity: 'Vidnoe'}
                },
                {
                    id: 2,
                    img: img2,
                    follow: false,
                    name: 'Evgen',
                    status: 'I am dumb',
                    location: {country: 'Russia', sity: 'White poles'}
                },
                {
                    id: 3,
                    img: img3,
                    follow: true,
                    name: 'Sasha',
                    status: 'I am robot',
                    location: {country: 'Russia', sity: 'Domodedovo'}
                }
            ]
        )
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
            {props.usersPage.users.map(m => <div key={m.id}>
                <span>
                    <div>
                        <img className={cl.img} alt={'avatarka'} src={m.img}/>
                    </div>
                    <div>
                        {m.follow ? <button onClick={() => unFollowHandler(m.id)}>Follow</button>
                            : <button onClick={() => followHandler(m.id)}>UnFollow</button>}
                    </div>
                </span>
                <span>
                    <div>{m.name}</div>
                    <div>{m.status}</div>
                </span>
                <span>
                    <div>{m.location.country}</div>
                    <div>{m.location.sity}</div>
                </span>
            </div>)}

        </div>
    )
}