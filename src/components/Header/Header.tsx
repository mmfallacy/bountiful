import React from 'react'
import Style from './Header.module.scss'
import {ReactComponent as HeaderBG} from './Header.svg'

export default function Header():JSX.Element{
    return (
        <header className={Style.Header}>
            <span className={Style.HeaderBg}>
                <HeaderBG/>
            </span>
            
            <h1></h1>

        </header>
    )
}
