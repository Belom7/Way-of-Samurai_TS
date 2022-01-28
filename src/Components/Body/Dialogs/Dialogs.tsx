import React from "react";
import cl from './Dialogs.module.css'
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Messages/Message";
import {dialogsPageType} from "../../../Redux/state";

type typeProps ={
    dialogs:dialogsPageType
}


export const Dialogs:React.FC<typeProps> = (props) => {
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
        </div>
    )
}
