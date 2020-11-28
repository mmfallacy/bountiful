import React, {useState} from 'react'
import Style from './FormInput.module.scss'

const ImageInput = React.forwardRef(({name="image", label},ref)=>{
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
            <input ref={ref} name={name} hidden type="file" onChange={handleFileInput} id={name} accept="image/png, image/jpeg"/>
        </section>
    )
})

export default ImageInput