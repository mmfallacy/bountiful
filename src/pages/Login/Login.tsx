import React from 'react'
import BackgroundBlob from '../../components/Background/BackgroundBlob'
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton'
import Style from './Login.module.scss'

function Login() {
    return (
        <div className={Style.LoginPage}>          
            <BackgroundBlob />
            <div className={Style.LogoWrapper}>
                <span className={Style.Logo}></span>
                <span className={Style.AppName}>Bountiful</span>
            </div>
            <div className={Style.ButtonWrapper}>
                <PrimaryButton 
                
                    label="Login with Google"
                />
                <br/>
                <span className={Style.Secondary}>Don't have an account? <button>Sign up</button></span>
            </div>
        </div>
    )
}

export default Login