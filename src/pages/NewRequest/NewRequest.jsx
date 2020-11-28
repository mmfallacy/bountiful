import React from 'react'
import Style from './NewRequest.module.scss'
import PageHeader from '../../components/PageHeader/PageHeader'
import BackgroundBlob from '../../components/Background/BackgroundBlobRepeat'

export default function NewRequest() {
    return (
        <div className={Style.NewRequest}>
            <PageHeader 
                label="New Request"
            />
            <BackgroundBlob className={Style.BackgroundBlob}/>

            
        </div>
    )
}
