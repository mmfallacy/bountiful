import React from 'react'
import Style from './NewRequest.module.scss'
import PageHeader from '../../components/PageHeader/PageHeader'
import BackgroundBlob from '../../components/Background/BackgroundBlobRepeat'
import {MultiStepForm, Step, Stepper} from '../../components/MultiStepForm/MultiStepForm'


export default function NewRequest() {
    return (
        <div className={Style.NewRequest}>
            <PageHeader 
                label="New Request"
            />
            <BackgroundBlob className={Style.BackgroundBlob}/>

            <MultiStepForm className={Style.MultiStepForm}
                onSubmit={(e)=>{
                    console.log("Submitted")
                }}
            >
                <Step>
                    first div
                </Step>
                <Step>
                    second div
                </Step>
            </MultiStepForm>


        </div>
    )
}