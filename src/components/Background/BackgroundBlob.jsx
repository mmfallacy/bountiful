import React from 'react'
import {ReactComponent as Blob1} from './blob1.svg'
import {ReactComponent as Blob2} from './blob2.svg'
import Style from './BackgroundBlob.module.scss'

export default function BackgroundBlob(){
    return (
        <div className={Style.BlobBg}>
            <Blob1 className={Style.Blob1}/>
            <Blob2 className={Style.Blob2}/>
        </div>
    )
}
