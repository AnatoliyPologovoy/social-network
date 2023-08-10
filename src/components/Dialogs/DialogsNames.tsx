import {NavLink} from 'react-router-dom'
import React from 'react'
import {NameDialogsType} from '../../redux/State'
import cl from './dialogs.module.css'

export type DialogsNamesPropsType = {
    dialogsNames: NameDialogsType[]
}

export const DialogsNames: React.FC<DialogsNamesPropsType> = (props) => {
    const namesDialogsList = props.dialogsNames.map((el) => {
        return (
            <li key={el.id}>
                <NavLink to={'/dialogs/' + el.id}>{el.name}</NavLink>
            </li>
        )
    })

    return <ul className={cl.dialogsList}>{namesDialogsList}</ul>
}
