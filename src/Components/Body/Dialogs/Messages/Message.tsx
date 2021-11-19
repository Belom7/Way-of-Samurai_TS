import React from "react";
import cl from './Message.module.css'

type propsType={
    message:string
}
export const Message:React.FC<propsType> = (props) => {
    return (
        <div className={cl.messageItems}>{props.message}</div>
    )
}

