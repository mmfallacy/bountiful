import React from 'react'
import Style from './PrimaryButton.module.scss'


export default function PrimaryButton({label, variant="h3", onClick=()=>{}}){
    const Variant = variant
    return (
        <button className={Style.PrimaryButton} onClick={(e)=>onclick(e)}>
            <Variant className={Style.Label}>{label}</Variant>
        </button>
    )
}
