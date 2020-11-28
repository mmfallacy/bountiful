import React, {useState, useEffect} from 'react'
import Style from './MultiStepForm.module.scss'
import FormStepper from './FormStepper/FormStepper'
import PrimaryButton from '../PrimaryButton/PrimaryButton'

export function MultiStepForm({className, children, onSubmit, backRef, onLastBack}) {
    const formContent = React.Children.toArray(children)

    const isValidChild = (element) => React.isValidElement(element) && element.type.name === "Step"

    formContent.forEach(element=>{
        if(!isValidChild(element))
            throw Error(`Invalid Child of MultiStepForm: ${element.type.name} must be an instance of Step`)  
    })

    const onSubmitHandler = (e)=>{
        e.preventDefault()
        setActiveStep(step=>{
            if(step > steps-1){
                onSubmit(e)
                return 1
            }
            return step + 1
        })
    }

    const onBackHandler = (e)=>
        setActiveStep(step=>{
            if(step < 2){
                onLastBack()
                return step
            }
            return step - 1
        })
    
    
    useEffect(()=>{
        const backElement = backRef.current
        backElement.addEventListener('click', onBackHandler)
        return ()=>{
            backElement.removeEventListener('click', onBackHandler)
        }
    }, [backRef])

    const [activeStep, setActiveStep] = useState(3) 
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
        <>{children}</>
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
