import axios from "axios";
import { saveToSessionStorage } from "../utils/utils";
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS
} from './types'

export async function registerUser(context, {firstName, lastName, email, password, confirmPassword}) {
    const config = {
        headers : {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({firstName,lastName,email, password, confirmPassword})
    
    try {
        const res = await axios.post('http://localhost:5000/api/v1/auth/sign-up/customer', body, config)
        console.lod(res.data)
        context.dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })
        saveToSessionStorage('user', res.data);
    } catch(err) {
        
        console.log(err)
        const errors = {}
        if (Array.isArray(err.response.data.error)){
            err.response.data.error.forEach(error =>{
                let key = error.path
                let val = error.msg
                errors[key] = val
            })
        } else {
            errors["error"] = err.response.data.error
        }
        context.dispatch({
            type: REGISTER_FAIL,
            payload: errors
        })
    }
}

export async function login(context, {email, password}) {
    const config = {
        headers: {
            'Content-Type' : 'application/json'
        }
    }

    const body = JSON.stringify({email, password})

    try {
        const res = await axios.post('http://localhost:5000/api/v1/auth/login/local/customer', body, config)
        console.log(res.data);
        context.dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })
        saveToSessionStorage('user', res.data);
    } catch(err) {

        const errors = {}
        if (Array.isArray(err.response.data.error)){
            err.response.data.error.forEach(error =>{
                let key = error.path
                let val = error.msg
                errors[key] = val
            })
        } else {
            errors["error"] = err.response.data.error
        }
        context.dispatch({
            type: LOGIN_FAIL,
            payload: errors
        })
    }
}

export async function logout(context){
    context.dispatch({
        type: LOGOUT_SUCCESS
    })
}