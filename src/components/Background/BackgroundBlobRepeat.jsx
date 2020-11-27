import React from 'react'
import Style from './BackgroundBlob.module.scss'
import pattern from './blobpattern.svg'

export default function BackgroundBlobRepeat({children, className}){
    return (
        <div className={`${Style.BlobBgRepeat} ${className}`} style={{backgroundImage:`url(${pattern})`}}>
            {children}
        </div>
    )
}
