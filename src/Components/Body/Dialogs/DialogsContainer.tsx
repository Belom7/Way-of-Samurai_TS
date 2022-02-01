import React from "react";
import {addMessageAC, changeNewMassageAC} from "../../../Redux/dialogReducer";
import {appStoreType} from "../../../Redux/store";
import {Dialogs} from "./Dialogs";

type typeProps = {
    store:appStoreType
}

export const DialogsContainer: React.FC<typeProps> = (props) => {


    const onClickHandler = () => {
        props.store.dispatch(addMessageAC())
        props.store.dispatch(changeNewMassageAC(''))
    }

    const onChangeHandler = (newMessage:string) => {
        props.store.dispatch(changeNewMassageAC(newMessage))
    }

    return (
        <Dialogs state={props.store.getState().dialogPage} onClickHandler={onClickHandler} onChangeHandler={onChangeHandler}/>
    )
}

