import React from 'react'
import preloader from '../../assets/Spinner.svg'
import cl from './Preloader.module.css'

export const Preloader = () => {
    return (
        <div className={cl.background}>
            <img src={preloader} alt={preloader} className={cl.img} />
        </div>
    )
}
