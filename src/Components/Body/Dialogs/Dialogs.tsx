import React from "react";
import cl from './Dialogs.module.css'
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Messages/Message";
import {actionType, addMessageType, changeNewMessageText, dialogsPageType} from "../../../Redux/state";

type typeProps = {
    dialogs: dialogsPageType
    dispatch: (action: actionType) => void
}

const changeNewMassageAC = (text: string): changeNewMessageText => {
    return {
        type: 'CHANGE-NEW-MASSAGE-TEXT',
        text: text
    }
}

const addMessageAC = (): addMessageType => {
    return {
        type: 'ADD-MASSAGE',
    }
}

export const Dialogs: React.FC<typeProps> = (props) => {

    let newMessageRef = React.createRef<HTMLTextAreaElement>()

    const onClickHandler = () => {
        props.dispatch(addMessageAC())
        props.dispatch(changeNewMassageAC(''))
    }

    const onChangeHandler = () => {
        let newMessage = newMessageRef.current ? newMessageRef.current.value : ''
        props.dispatch(changeNewMassageAC(newMessage))
    }

    return (
        <div className={cl.dialogs}>
            <ul>
                {props.dialogs.arrName.map((el) => {
                    return (
                        <li className={cl.dialog}>
                            <Dialog name={el.name} id={el.id} img={el.img}/>
                        </li>
                    )
                })}
            </ul>
            <ul>
                {props.dialogs.arrMessage.map((el_arrMessage) => {
                    return (
                        <li className={cl.message}>
                            <Message message={el_arrMessage.message}/>
                        </li>
                    )
                })}
            </ul>
            <div>
                <div><textarea ref={newMessageRef} value={props.dialogs.newDialogMessage}
                               onChange={onChangeHandler}/></div>
                <div>
                    <button onClick={onClickHandler}>addMessage</button>
                </div>
            </div>
        </div>
    )
}

