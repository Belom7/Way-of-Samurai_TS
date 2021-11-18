import React from "react";
import cl from './Dialogs.module.css'

type propsType = {
    name:Array<arrNameType>
    message:Array<arrMessageType>
}

type arrNameType={
    name:string
}
type arrMessageType={
    message:string
}

export const Dialogs = (props:propsType) => {
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
                {props.name.map((el_arrName) => {
                    return (
                        <li className={cl.dialog}>
                            <div className={cl.dialogItems}>{el_arrName.name}</div>
                        </li>)
                })}
            </ul>
            <ul>
                {props.message.map((el_arrMessage)=>{
                    return(
                        <li className={cl.message}>
                            <div className={cl.messageItems}>{el_arrMessage.message}</div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

