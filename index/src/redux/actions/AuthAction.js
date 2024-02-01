import { AuthActionType } from "./type";

import axios from 'axios'

export const SignupAuthAction = (userState, history) => {
    return async (dispatch) => {
      
        try {
            const {data}= await axios.post("/auth/signup", userState);
            
            const newUser = {
                expiresIn : data.expiresIn,
                token : data.token,
                name : data.data.user.name,
                email : data.data.user.email,
                contactNumber : data.data.user.contactNumber,
                college : data.data.user.college,
                role : data.data.user.role,
                referenceCAid : data.data.user.referenceCAid,
                points : data.data.user.points,
                numberOfRegisteredDelegates : data.data.user.numberOfRegisteredDelegates,
                summitID : data.data.user.summitID
            } 
            dispatch({
                type : AuthActionType.SIGNUP_SUCCESS,
                payload : newUser
            })
            history.push('/dashboard')
        } catch (error) {
            if(error.message){
            dispatch({
                type : AuthActionType.SIGNUP_FAIL,
                payload : error.message
            })
        }
        }
    }
}

export const LoginAuthAction = (loginState, history) => {
    return async (dispatch) => {
        try {
            const {data}= await axios.post("/auth/login", loginState);

            const newUser = {
           expiresIn : data.expiresIn,
                token : data.token,
                name : data.data.user.name,
                email : data.data.user.email,
                contactNumber : data.data.user.contactNumber,
                college : data.data.user.college,
                role : data.data.user.role,
                referenceCAid : data.data.user.referenceCAid,
                points : data.data.user.points,
                numberOfRegisteredDelegates : data.data.user.numberOfRegisteredDelegates,
                summitID : data.data.user.summitID
            }
            
            dispatch({
                type : AuthActionType.LOGIN_SUCCESS,
                payload : newUser
            })
            history.push('/dashboard')
        } catch (error) {
            if(error.message){
                dispatch({
                    type : AuthActionType.SIGNUP_FAIL,
                    payload : error.message
                })
            }
        }
    }
}

export const LogoutAuthAction = (history) => {
    return async (dispatch) => {
        try {
            const {data}= await axios.get("/auth/logout");
          
            dispatch({
                type : AuthActionType.LOGOUT_SUCCESS,
                payload : data.status
            })
            history.push('/')
        } catch (error) {
            if(error.message){
            dispatch({
                type : AuthActionType.LOGOUT_FAIL,
                payload : error.message
            })
        }

        history.push('/')
        }
    }
}

export const ProfileCompletionAction = (userState, history) => {
    
    return async (dispatch) => {
        try {
            const {data}= await axios.patch("/users/updateMe", userState);

       
            
            const newUser = {
                college : data.user.college,
                address : data.user.address,
                graduationYear : data.user.graduationYear
            } 

            
            dispatch({
                type : AuthActionType.PROFILE_COMPLETION_SUCCESS,
                payload : newUser
            })
            history.push('/dashboard')
        } catch (error) {
            
            if(error.message){
            dispatch({
                type : AuthActionType.PROFILE_COMPLETION_FAIL,
                payload : error.message
            })
        }
        }
    }
}