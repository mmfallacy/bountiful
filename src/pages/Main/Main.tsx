import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import Style from './Main.module.scss'

function Main(): JSX.Element{
    const [isInSellerMode, setMode] = useState<boolean>(false)
    return (
        <div>
            <Header />
        </div>
    )
}


export default Main