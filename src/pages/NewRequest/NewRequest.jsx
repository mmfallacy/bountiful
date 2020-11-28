import React, {useState} from 'react'
import Style from './NewRequest.module.scss'
import PageHeader from '../../components/PageHeader/PageHeader'
import BackgroundBlob from '../../components/Background/BackgroundBlobRepeat'
import {MultiStepForm, Step} from '../../components/MultiStepForm/MultiStepForm'


export default function NewRequest() {
    const backRef = React.createRef()

    return (
        <div className={Style.NewRequest}>
            <PageHeader 
                label="New Request"
                ref={{backRef}}
            />
            <BackgroundBlob className={Style.BackgroundBlob}/>

            <MultiStepForm className={Style.MultiStepForm}
                onSubmit={(e)=>{
                    console.log("Submitted")
                }}
                onLastBack={(e)=>{
                    console.log("Back")
                }}
                backRef={backRef}
            >
                <Step>
                    <FormInput 
                        label="What do you intend to buy?"
                        placeholder="Food, Gadgets..."
                    />

                    <section className={Style.FormInput}>
                        <h3>For around how much?</h3>
                        <div className={`${Style.Input} ${Style.Number}`}>
                            <h3>Php</h3>
                            <input className={Style.ActualInput} type="number" />
                        </div>
                    </section>
                </Step>
                <Step>
                    <FormInput 
                        label="What do you intend to buy?"
                        placeholder="Food, Gadgets..."
                        variant="textarea"
                    />
                </Step>
                <Step>
                    <ImageInput 
                        label="What does this item look like?" 
                    />
                </Step>
            </MultiStepForm>


        </div>
    )
}

function FormInput({label, placeholder, variant}){

    return(
        <section className={Style.FormInput}>
            <h3>{label}</h3>
            { variant === "textarea"?
                <textarea className={Style.Input} placeholder={placeholder} />
                :    <input className={Style.Input} placeholder={placeholder}/>
            }
        </section>
    )
}

function ImageInput({name="image", label}){
    const fileRef = React.createRef()
    const reader = new FileReader()
    
    const [image, setImage] = useState(null)

    const removeImage = ()=>{
        setImage(null)
    }

    const handleFileInput = (e)=>{
        if (e.target.files[0])
        reader.readAsDataURL(e.target.files[0])
        reader.onload = r => setImage(r.target.result)
    }

    return(
        <section className={Style.ImageInput}>
            <h3>{label}</h3>
            <div className={Style.ImageContainer}>
                <img src={image} alt="Product" className={`${image ? '':Style.Hidden}`} onDoubleClick={removeImage}/>
            </div>
            <label htmlFor={name} className={Style.Upload}>
                <h3>Add a Photo</h3>
            </label>
            <input ref={fileRef} hidden type="file" onChange={handleFileInput} id={name} name={name} accept="image/png, image/jpeg"/>
        </section>
    )
}