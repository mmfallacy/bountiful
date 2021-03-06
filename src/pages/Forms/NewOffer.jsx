import React, {useState, useEffect} from 'react'
import Style from './NewOffer.module.scss'
import {
    PageHeader,
    BackgroundBlob,
    MultiStepForm, Step,
    FormInput, ImageInput,
    MyRequestCard as Card
} from '../../components'
import {useRequestFormStore} from '../../store/FormStore'
import {useForm} from 'react-hook-form'

import {useAPI} from '../../store'
import {useHistory} from 'react-router-dom'


export default function NewOffer(props) {

    const backRef = React.createRef()

    const productId = props.match.params.productId

    const API = useAPI(state=>state.instance)

    const history = useHistory() 

    const update = useRequestFormStore(state=>state.update)
    // const reset = useRequestFormStore(state=>state.reset)
    const formData = useRequestFormStore(state=>state.data)

    const [product, setProduct] = useState({})

    useEffect(()=>{
        async function onComponentMount(){
            const listing = await API.retrieveMultipleListingsById([productId])[0]
            console.log(listing)
            setProduct(listing)
        }
        onComponentMount()
    },[])

    const {handleSubmit, register} = useForm()

    return (
        <div className={Style.NewRequest}>
            <PageHeader 
                label="New Offer"
                ref={{backRef}}
            />
            <BackgroundBlob className={Style.BackgroundBlob}/>
            <MultiStepForm className={Style.MultiStepForm}
                onSubmit={async (e)=>{
                    console.log("Submitted")
                    console.log(formData)
                    const {
                        productName, description,price,productImage, productId
                    } = formData
                    await API.createOfferOnListingId(productId,productName,description,price,productImage)
                    alert("Submitted Offer!")
                    history.goBack()
                }}
                onLastBack={(e)=>{
                    history.goBack()
                }}
                onStepperClick={handleSubmit((data)=>update(data))}
                backRef={backRef}
            >
                <Step>
                    <div className={Style.CardContainer}>
                        <h3>You intend to offer on</h3>
                        <input hidden name="productName" ref={register} value={product?.name}/>
                        <input hidden name="productId" ref={register} value={product?.id}/>
                        <Card imgSrc={product.photo} budget={product?.budget} product={product?.name} />
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

