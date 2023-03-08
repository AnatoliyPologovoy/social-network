import React from "react";
import cl from "./dialogs.module.css"
import {NameDialogs} from "./NameDialogs";
import {Message} from "./Messages";


export const Dialogs = () => {
    return (
        <div className={cl.dialogsWrapper}>
            <ul className={cl.dialogsList}>
               <NameDialogs name={'Valeria'} id={1} />
               <NameDialogs name={'Roman'} id={2} />
               <NameDialogs name={'Andrey'} id={3} />
               <NameDialogs name={'Kostya'} id={4} />
            </ul>
            <div className={cl.messagesWrapper}>
                <div className={cl.messagesInner}>
                    <Message text={'hello'}/>
                    <Message text={'hi'}/>
                    <Message text={'how are you'}/>
                    <Message text={'YO'}/>
                 </div>
                <div className={cl.messagesSend}>
                    //messages send area
                </div>

            </div>
        </div>
    )
}

