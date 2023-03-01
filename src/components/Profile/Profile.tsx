import React from "react";
import cl from "./profile.module.css";
import {Posts} from "./Posts/Posts";

const Profile = () => {
    return (
        <div className={cl.profile}>
            <img
                src="https://n1s2.hsmedia.ru/60/b5/cc/60b5cc5266a98b966e2f35c57ed388c8/690x380_0x0a330c2a_12567029551616070388.jpeg"
                alt="главное фото" className={cl.main_img}/>
            <form action="get" className={cl.form_post_message}>
                <textarea name="post-message" id="post-message" cols={60} rows={10}></textarea>
                <input type="submit" value={'Опубликовать'}/>
            </form>
            <Posts/>
        </div>
    )
}


export default Profile;