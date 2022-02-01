import React from "react";
import {addMessageAC, changeNewMassageAC} from "../../../Redux/dialogReducer";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../../storeContext";


export const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                const onClickHandler = () => {
                    store.dispatch(addMessageAC())
                    store.dispatch(changeNewMassageAC(''))
                }

                const onChangeHandler = (newMessage:string) => {
                    store.dispatch(changeNewMassageAC(newMessage))
                }
                return(
                    <Dialogs state={store.getState().dialogPage} onClickHandler={onClickHandler} onChangeHandler={onChangeHandler}/>
                )
            }
        }
        </StoreContext.Consumer>
    )
}

