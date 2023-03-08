import {NavLink} from "react-router-dom";
import React from "react";

export type NameDialogsPropsType = {
    name : string,
    id : number
}

export const NameDialogs : React.FC<NameDialogsPropsType> = (props) => {
    return (
        <li key={props.id}>
            <NavLink to={"/dialogs/" + props.id} >
                {props.name}
            </NavLink>
        </li>
    )
}