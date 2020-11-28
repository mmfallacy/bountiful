import React from 'react'
import Style from './FormStepper.module.scss'

export default function FormStepper({steps=1, activeStep=1, className}) {
    if(activeStep > steps) throw Error("FormStepper component expects activeStep to be less than total steps")
    const contents = []
    for(let i=1;i<=steps;i++){
        contents.push(<FormStep key={i} active={i <= activeStep} index={i}/>)
        if(i!=steps) contents.push(<span key={`d-${i}`} style={{width:`${88-8*steps}px`}} className={Style.Divider}></span>)
    }
        
    return (
        <div className={`${Style.FormStepper} ${className}`}>
            {contents}
        </div>
    )
}

function FormStep({active, index}){

    return(
        <span className={`${Style.FormStep} ${active && Style.active}`}>{index}</span>
    )
}