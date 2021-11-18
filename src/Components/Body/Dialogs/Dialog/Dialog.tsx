import React from "react";
import cl from './Dialog.module.css'
import {NavLink} from "react-router-dom";

type propsType = {
    name:string
    id:number
}

export const Dialog = (props:propsType) => {
    return (
        <div className={cl.dialogItems}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}

