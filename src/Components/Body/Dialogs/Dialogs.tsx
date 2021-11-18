import React from "react";
import cl from './Dialogs.module.css'

const arrName = [
    {name: 'Maks'},
    {name: 'Yulia'},
    {name: 'Sasha'},
    {name: 'Evgen'},
    {name: 'Ivan'},
]

const arrMessage = [
    {message: 'Hi'},
    {message: 'Bay'},
    {message: 'Fack you!'},
    {message: 'ha-ha'},
]

export const Dialogs = (prop: any) => {
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
                {arrName.map((el_arrName) => {
                    return (
                        <li className={cl.dialog}>
                            <div className={cl.dialogItems}>{el_arrName.name}</div>
                        </li>)
                })}
            </ul>
            <ul>
                {arrMessage.map((el_arrMessage)=>{
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

