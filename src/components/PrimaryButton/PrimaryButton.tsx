import React from 'react'
import Style from './PrimaryButton.module.scss'

interface PrimaryButtonProps{
    label: string,

}

export default function PrimaryButton({label}: PrimaryButtonProps){
    return (
        <button className={Style.PrimaryButton}>
            <h3 className={Style.Label}>{label}</h3>
        </button>
    )
}
