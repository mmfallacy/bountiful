import create from 'zustand'
import {BackendFacade} from '../api'

const FIREBASE_CREDENTIALS = JSON.parse(process.env.REACT_APP_FIREBASE_API_CREDENTIALS)

const useAPI = create(set=>({
    instance: new BackendFacade(FIREBASE_CREDENTIALS)
}))

export default useAPI