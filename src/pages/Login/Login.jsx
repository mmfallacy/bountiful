import React from 'react'
import {BackgroundBlob, PrimaryButton} from '../../components'
import Style from './Login.module.scss'

import {useAPI} from '../../store'

function Login({onLogin}) {
    const API = useAPI(state=>state.instance)
    return (
        <div className={Style.LoginPage}>          
            <BackgroundBlob />
            <div className={Style.LogoWrapper}>
                <span className={Style.Logo}></span>
                <span className={Style.AppName}>Bountiful</span>
            </div>
            <div className={Style.ButtonWrapper}>
                <PrimaryButton 
                    onClick={async ()=>{
                        try{
                            await API.signInWithGoogle()
                        } catch (e) {
                            console.log(e)
                        }
                        onLogin()
                    }}
                    label="Login with Google"
                />
                <br/>
                <h4 className={Style.Secondary}>Don't have an account? <button>It automatically signs up!</button></h4>
            </div>
        </div>
    )
}

export default Login