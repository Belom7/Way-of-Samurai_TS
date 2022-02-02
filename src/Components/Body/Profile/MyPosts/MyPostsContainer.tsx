import {addPostAC, changeNewPostTextAC, profilePageType} from "../../../../Redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {appStateType} from "../../../../Redux/store";
import {Dispatch} from "redux";


type mapStateToPropsType = {
    profilePage: profilePageType
}
type mapDispatchToPropsType = {
    addPost:(text:string)=>void
    onChange:(text:string) => void
}



const mapStateToProps = (state:appStateType):mapStateToPropsType => {
    return{
        profilePage:state.profilePage
    }
}
const mapDispatchToProps = (dispatch:Dispatch):mapDispatchToPropsType => {
    return {
        addPost: (text:string)=> {
                    dispatch(addPostAC(text))
                    //dispatch(changeNewPostTextAC(''))
                },
        onChange:(text:string) => {
            dispatch(changeNewPostTextAC(text))
        }
    }
}


export const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)