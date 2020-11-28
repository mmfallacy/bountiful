import React from 'react'
import Style from './PrimaryButton.module.scss'


export default function PrimaryButton({label, variant="h3"}){
    const Variant = variant
    return (
        <button className={Style.PrimaryButton}>
            <Variant className={Style.Label}>{label}</Variant>
        </button>
    )
}
