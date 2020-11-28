import React from 'react'
import Style from './FormStepper.module.scss'

export default function FormStepper({className}) {
    return (
        <div className={`${Style.FormStepper} ${className}`}>
            <FormStep index="1"/>
            
        </div>
    )
}

function FormStep({active, index}){

    return(
        <span className={`${Style.FormStep} ${active && Style.active}`}>{index}</span>
    )
}