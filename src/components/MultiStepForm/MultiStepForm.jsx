import React from 'react'
import Style from './MultiStepForm.module.scss'
import FormStepper from './FormStepper/FormStepper'
import PrimaryButton from '../PrimaryButton/PrimaryButton'

export function MultiStepForm({className, children}) {
    const formContent = React.Children.toArray(children)

    const isValidChild = (element) => React.isValidElement(element) && ( element.type.prototype instanceof Step )  

    const onClickHandler = (e)=>{
        e.preventDefault()
        
    }

    return (
        <form className={`${Style.MultiStepForm} ${className}`}
            onClick={onClickHandler}
        >
            <FormStepper className={Style.FormStepper}
                steps={3}
                activeStep={1}
            />
            <div className={Style.FormStepContainer}>
                {formContent.map((element, idx)=>
                    isValidChild && React.cloneElement(element, {props:{key: idx}})
                )}
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
