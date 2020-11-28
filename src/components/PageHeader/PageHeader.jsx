import React from 'react'
import Style from './PageHeader.module.scss'
import {ReactComponent as ChevronLeft} from './ic_chevron.svg'

export default function PageHeader({label, actionIcon, onActionClick=()=>{}, onChevronClick=()=>{}}) {
    return (
        <header className={Style.PageHeader}>
            <button 
                className={Style.Chevron}
                onClick={(e)=>onChevronClick(e)}
            >
                <ChevronLeft />
            </button>
            
            <h2 className={Style.Label}>{label}</h2>

            { actionIcon &&
            <button 
                className={Style.Action}
                onClick={(e)=>onActionClick(e)}
            >
                 {actionIcon}
            </button>
            }
        </header>
    )
}
