import React, {useState} from 'react'
import Style from './NewRequest.module.scss'
import PageHeader from '../../components/PageHeader/PageHeader'
import BackgroundBlob from '../../components/Background/BackgroundBlobRepeat'
import {MultiStepForm, Step} from '../../components/MultiStepForm/MultiStepForm'
import {useRequestFormStore} from '../../store/FormStore'
import {useForm} from 'react-hook-form'
import {FormInput, ImageInput} from '../../components/FormInput/FormInput'

export default function NewRequest(props) {
    const productId = parseInt(props.match.params.productId)
    const backRef = React.createRef()

    const update = useRequestFormStore(state=>state.update)
    const reset = useRequestFormStore(state=>state.reset)
    const formData = useRequestFormStore(state=>state.data)

    const {handleSubmit, error, register} = useForm()
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
                    console.log(formData)
                    alert("Submitted Request!")
                }}
                onLastBack={(e)=>{
                    console.log("Back")
                }}
                onStepperClick={handleSubmit((data)=>update(data))}
                backRef={backRef}
            >
                <Step>
                    <input hidden value={productId} name="productId" ref={register}/>
                    <FormInput 
                        label="What do you intend to buy?"
                        placeholder="Food, Gadgets..."
                        ref={register}
                        name="productName"
                    />

                    <section className={Style.FormInput}>
                        <h3>For around how much?</h3>
                        <div className={`${Style.Input} ${Style.Number}`}>
                            <h3>Php</h3>
                            <input className={Style.ActualInput} ref={register} name="price" type="number" />
                        </div>
                    </section>
                </Step>
                <Step>
                    <FormInput 
                        label="How can you describe what you're looking for?"
                        placeholder="It looks like ..."
                        variant="textarea"
                        ref={register}
                        name="description"
                    />
                </Step>
                <Step>
                    <ImageInput 
                        label="What does this item look like?" 
                        ref={register}
                        name="productImage"
                    />
                </Step>
            </MultiStepForm>


        </div>
    )
}

