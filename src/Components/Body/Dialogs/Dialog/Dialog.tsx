import React from "react";
import cl from './Dialog.module.css'
import {NavLink} from "react-router-dom";
import {arrNameType} from "../../../../Redux/state";


export const Dialog:React.FC<arrNameType> = (props) => {
    return (
        <div className={cl.dialogItems}>
            <NavLink to={`/message/${props.id}`}><img alt={'avatar'} className={cl.img} src={props.img}/>{props.name}</NavLink>
        </div>
    )
}

