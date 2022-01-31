import React, {ChangeEvent} from "react";
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


    const onClickHandler = () => {
        props.dispatch(addMessageAC())
        props.dispatch(changeNewMassageAC(''))
    }

    const onChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
        let newMessage = e.currentTarget.value
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
                <div>
                    <div><textarea value={props.dialogs.newDialogMessage}
                                   onChange={onChangeHandler}/></div>
                    <div>
                        <button onClick={onClickHandler}>addMessage</button>
                    </div>
                </div>
            </ul>

        </div>
    )
}

