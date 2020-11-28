import React from 'react'
import Style from './PageHeader.module.scss'
import {ReactComponent as ChevronLeft} from './ic_chevron.svg'

const PageHeader = React.forwardRef((props, ref) =>{
    const {label, actionIcon, onActionClick=()=>{}, onChevronClick=()=>{}} = props
    const {backRef=React.createRef(), actionRef=React.createRef()} = ref
    return (
        <header className={Style.PageHeader}>
            <button 
                className={Style.Chevron}
                onClick={(e)=>onChevronClick(e)}
                ref={backRef}
            >
                <ChevronLeft />
            </button>
            
            <h2 className={Style.Label}>{label}</h2>

            { actionIcon &&
            <button 
                className={Style.Action}
                onClick={(e)=>onActionClick(e)}
                ref={actionRef}
            >
                 {actionIcon}
            </button>
            }
        </header>
    )
})
export default PageHeader