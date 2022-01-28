import React from 'react';
import {friendsType} from "../../Redux/state";
import cl from './SidebarNav.module.css'

type propsType = {
    friends: friendsType[]
}

export const SidebarNav: React.FC<propsType> = (props) => {
    return (
        <div className={cl.sidebar}>
            <h3>Friends</h3>
            {props.friends.map(el=><span key={el.id} ><img alt={'avatar'} src={el.img} className={cl.img}/>{el.name}</span>)}
        </div>
    )
}

