import React from 'react'
import Style from './PrimaryButton.module.scss'


export default function PrimaryButton({label}){
    return (
        <button className={Style.PrimaryButton}>
            <h3 className={Style.Label}>{label}</h3>
        </button>
    )
}
