import React, {useRef} from 'react'
import Style from './PageHeader.module.scss'
import {ReactComponent as ChevronLeft} from './ic_chevron.svg'
import {useHistory} from "react-router-dom"

const PageHeader = React.forwardRef((props, ref) =>{

    const history = useHistory()
    const {label, actionIcon, onActionClick=()=>{}, onChevronClick=()=>history.goBack()} = props


    const localBackRef = useRef(null)
    const localActionRef =useRef(null)
    const backRef = ref?.backRef || localBackRef
    const actionRef = ref?.actionRef || localActionRef

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