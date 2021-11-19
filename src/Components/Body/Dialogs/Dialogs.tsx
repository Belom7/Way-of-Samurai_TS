import React from "react";
import cl from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Messages/Message";

type typeProps ={
    arrName: Array<arrNameType>
    arrMessage: Array<arrMessage>

}

type arrNameType ={
    id:number
    name:string
}

type arrMessage={
    message:string
}


export const Dialogs:React.FC<typeProps> = (props) => {
    return (
        // <div className={cl.dialogs}>
        //     <div className={cl.dialog}>
        //         <div className={cl.dialogItems}>Maks</div>
        //         <div className={cl.dialogItems}>Dima</div>
        //         <div className={cl.dialogItems}>Andry</div>
        //         <div className={cl.dialogItems}>Vika</div>
        //         <div className={cl.dialogItems}>Yulia</div>
        //     </div>
        //     <div className={cl.message}>
        //         <div className={cl.messageItems}>Hi</div>
        //         <div className={cl.messageItems}>Boom</div>
        //         <div className={cl.messageItems}>Bay</div>
        //     </div>
        // </div>
        <div className={cl.dialogs}>
            <ul>
                {props.arrName.map((el) => {
                    return (
                        <li className={cl.dialog}>
                            <Dialog name={el.name} id={el.id}/>
                        </li>
                    )
                })}
            </ul>
            <ul>
                {props.arrMessage.map((el_arrMessage) => {
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

