import React from "react";
import {appStoreType} from "./Redux/store";


export const StoreContext = React.createContext({} as appStoreType)

type ProviderType = {
    value:appStoreType
    children:React.ReactNode
}

export const Provider = (props:ProviderType) => {
    return (
        <StoreContext.Provider value={props.value}>
            {props.children}
        </StoreContext.Provider>
    )
}