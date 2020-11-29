import React from 'react'
import Style from './FormInput.module.scss'

const FormInput = React.forwardRef((props,ref)=>{
    const {label, variant, placeholder, name} = props
    return(
        <section className={Style.FormInput}>
            <h3>{label}</h3>
            { variant === "textarea"?
                <textarea ref={ref} name={name} className={Style.Input} placeholder={placeholder} />
                :    <input ref={ref} name={name} className={Style.Input} placeholder={placeholder}/>
            }
        </section>
    )
})

export default FormInput