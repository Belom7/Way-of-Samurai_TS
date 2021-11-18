import React from "react";
import cl from './Message.module.css'

type propsType={
    message:string
}
export const Message = (props:propsType) => {
    return (
        <div className={cl.messageItems}>{props.message}</div>
    )
}

