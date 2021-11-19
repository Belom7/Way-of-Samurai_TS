import React from "react";
import cl from './Dialog.module.css'
import {NavLink} from "react-router-dom";

type propsType = {
    name:string
    id:number
}

export const Dialog:React.FC<propsType> = (props) => {
    return (
        <div className={cl.dialogItems}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}

