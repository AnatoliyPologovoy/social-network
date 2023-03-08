import React, {useState} from "react";
import cl from "./profile.module.css";
import {Posts} from "./Posts/Posts";
import {PersonData} from "./PersonData";
import avatar1 from "../../img/maxim-ava.jpg";


export const Profile = () => {
    let [personData, usePersonData] = useState(
        {
            age: 20,
            name: 'Maxim',
            id: 1,
            avatar: avatar1
        }
    )

    return (
        <div className={cl.profile}>
            <img
                src="https://n1s2.hsmedia.ru/60/b5/cc/60b5cc5266a98b966e2f35c57ed388c8/690x380_0x0a330c2a_12567029551616070388.jpeg"
                alt="главное фото" className={cl.main_img}/>
            <PersonData data={personData}/>

            <Posts/>
        </div>
    )
}
