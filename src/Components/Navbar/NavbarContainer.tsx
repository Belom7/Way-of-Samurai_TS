import React from "react";
import {Navbar} from "./Navbar";
import {StoreContext} from '../../storeContext';

export const NavbarContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                    return (
                        <Navbar state={store.getState().navbarPage}/>
                    )
                }
            }
        </StoreContext.Consumer>

    )
}