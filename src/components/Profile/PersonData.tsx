import React from "react";
import cl from "./personData.module.css"
import {PersonDataType} from "../../index";


type PersonDataPropsType = {
    data : PersonDataType,
}


export const PersonData: React.FC<PersonDataPropsType> = (props) => {
    return (
        <div className={cl.personData}>
            <img
                className={cl.imgAvatar}
                src={props.data.avatar}
                alt={"аватарка пользователя " + props.data.name}/>
            <h2 className={cl.name}>{props.data.name}</h2>
            <p className={cl.age}> {props.data.age}</p>
        </div>
    )
}

