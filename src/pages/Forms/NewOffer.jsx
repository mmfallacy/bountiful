import React from 'react'
import Style from './NewOffer.module.scss'
import PageHeader from '../../components/PageHeader/PageHeader'
import BackgroundBlob from '../../components/Background/BackgroundBlobRepeat'
import {MultiStepForm, Step} from '../../components/MultiStepForm/MultiStepForm'
import {useRequestFormStore} from '../../store/FormStore'
import {useForm} from 'react-hook-form'
import {FormInput, ImageInput} from '../../components/FormInput/FormInput'
import Card from '../../components/Card/MyRequestCard'



export default function NewOffer({productObj}) {

    const backRef = React.createRef()

    const update = useRequestFormStore(state=>state.update)
    // const reset = useRequestFormStore(state=>state.reset)
    const formData = useRequestFormStore(state=>state.data)

    const {handleSubmit, register} = useForm()

    return (
        <div className={Style.NewRequest}>
            <PageHeader 
                label="New Offer"
                ref={{backRef}}
            />
            <BackgroundBlob className={Style.BackgroundBlob}/>
            <MultiStepForm className={Style.MultiStepForm}
                onSubmit={(e)=>{
                    console.log("Submitted")
                    console.log(formData)
                    alert("Submitted Offer!")
                }}
                onLastBack={(e)=>{
                    console.log("Back")
                }}
                onStepperClick={handleSubmit((data)=>update(data))}
                backRef={backRef}
            >
                <Step>
                    <div className={Style.CardContainer}>
                        <h3>You intend to offer on</h3>
                        <input hidden name="productName" ref={register} value={productObj.name}/>
                        <input hidden name="productId" ref={register} value={productObj.id}/>
                        <Card imgSrc={productObj.imgSrc} budget={productObj.budget} product={productObj.name} />
                    </div>
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
                        label="Please describe your item"
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

