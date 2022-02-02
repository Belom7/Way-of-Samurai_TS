import {addMessageAC, changeNewMassageAC, dialogsPageType} from "../../../Redux/dialogReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {appStateType} from "../../../Redux/store";
import {Dispatch} from "redux";

export type DialogType = mapStateToPropsType & mapDispatchToPropsType

type mapStateToPropsType = {
    dialogsPage:dialogsPageType
}
type mapDispatchToPropsType = {
    onClickHandler: () => void
    onChangeHandler:(newMessage:string) =>void
}


const mapStateToProps = (state:appStateType): mapStateToPropsType => {
    return {
        dialogsPage:state.dialogPage
    }
}
const mapDispatchToProps = (dispatch:Dispatch): mapDispatchToPropsType => {
    return {
        onClickHandler: () => {
                    dispatch(addMessageAC())
                    dispatch(changeNewMassageAC(''))
                },
        onChangeHandler:(newMessage:string) => {
                    dispatch(changeNewMassageAC(newMessage))
                }
    }
}
export const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)

