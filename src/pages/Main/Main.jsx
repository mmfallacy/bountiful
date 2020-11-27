import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import Style from './Main.module.scss'

function Main(){
    const [isInSellerMode, setMode] = useState(false)
    return (
        <div>
            <Header />
        </div>
    )
}


export default Main