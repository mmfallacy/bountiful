import React, {useState} from 'react'
import Style from './MultiStepForm.module.scss'
import FormStepper from './FormStepper/FormStepper'
import PrimaryButton from '../PrimaryButton/PrimaryButton'

export function MultiStepForm({className, children, onSubmit}) {
    const formContent = React.Children.toArray(children)

    const isValidChild = (element) => React.isValidElement(element) && element.type.name === "Step"

    formContent.forEach(element=>{
        if(!isValidChild(element))
            throw Error(`Invalid Child of MultiStepForm: ${element.type.name} must be an instance of Step`)  
    })

    const onSubmitHandler = (e)=>{
        e.preventDefault()
        if(activeStep > steps-1){
            onSubmit(e)
            setActiveStep(1)
        }
        else
            setActiveStep(step=>step+1)
    }


    const [activeStep, setActiveStep] = useState(1) 
    const steps = formContent.length

    return (
        <form className={`${Style.MultiStepForm} ${className}`}
            onSubmit={onSubmitHandler}
        >
            <FormStepper className={Style.FormStepper}
                {...{steps,activeStep}}
            />
            <div className={Style.FormStepContainer}>
                {React.cloneElement(formContent[activeStep-1])}
            </div>
            <Stepper />
        </form>
    )
}

export function Step({children}){
    return(
        <div>{children}</div>
    )
}

export function Stepper(){
    return(
        <PrimaryButton 
            label="Next"
            variant="h4"
        />
    )
}
