import React, {ChangeEvent} from "react";
import cl from './Dialogs.module.css'
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Messages/Message";
import {DialogType} from "./DialogsContainer";


export const Dialogs: React.FC<DialogType> = (props) => {


    const onClickHandler = () => {
        props.onClickHandler()
    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newMessage = e.currentTarget.value
        props.onChangeHandler(newMessage)
    }

    return (
        <div className={cl.dialogs}>
            <ul>
                {props.dialogsPage.arrName.map((el) => {
                    return (
                        <li className={cl.dialog}>
                            <Dialog name={el.name} id={el.id} img={el.img}/>
                        </li>
                    )
                })}
            </ul>
            <ul>
                {props.dialogsPage.arrMessage.map((el_arrMessage) => {
                    return (
                        <li className={cl.message}>
                            <Message message={el_arrMessage.message}/>
                        </li>
                    )
                })}
                <div>
                    <div>
                        <textarea value={props.dialogsPage.newDialogMessage}
                                  onChange={onChangeHandler}/>
                    </div>
                    <div>
                        <button onClick={onClickHandler}>addMessage</button>
                    </div>
                </div>
            </ul>

        </div>
    )
}

