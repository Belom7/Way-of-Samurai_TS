import {connect} from "react-redux";
import {Users} from "./Users";
import {appStateType} from "../../../Redux/store";
import {followAC, setUsersAC, unFollowAC, usersPageType} from "../../../Redux/usersReducer";
import {Dispatch} from "redux";


type mapStateToPropsType = {
    usersPage: usersPageType
}
type mapDispatchToPropsType = {
    follow: (userId:number)=>void
    unFollow : (userId:number) =>void
    setUsers : (users:any) =>void
}

const mapStateToProps = (state:appStateType):mapStateToPropsType => {
    return {
        usersPage : state.usersPage
    }
}
const mapDispatchToProps = (dispatch:Dispatch):mapDispatchToPropsType => {
    return {
        follow: (userId:number)=>{
            dispatch(followAC(userId))
        },
        unFollow : (userId:number) => {
            dispatch(unFollowAC(userId))
        },
        setUsers : (users:any) => {
            dispatch(setUsersAC(users))
        }
    }
}
export const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)