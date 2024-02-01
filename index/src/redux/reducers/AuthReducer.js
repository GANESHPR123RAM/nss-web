import axios from "axios";
import { AuthActionType } from "../actions/type";


const authState = {
    isLoggedIn : false,
    user : {
        name :"",
        email : "",
        contactNumber : "",
        college : "",
        address : "",
        role : "",
        CARank : "",
        referenceCAid : "",
        expiresIn : "",
        token : "",
        points : "",
        numberOfRegisteredDelegates : "",
        graduationYear : "",
        summitID : ""

    }
}

const getAuthState = () => {
    const auth = localStorage.getItem("auth");
    try {
        const authObj = JSON.parse(auth);
        const {expiresIn, token} = authObj.user;

        if(new Date(expiresIn) > new Date()){
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
            return authObj
        }
        return authState;
    } catch (error) {
        return authState
    }
}

const newAuth = getAuthState()


const authReducer = (state = newAuth, action) => {
    
    switch (action.type){
        case AuthActionType.SIGNUP_SUCCESS : 
            const newAuthState = {
                isLoggedIn : true,
                user : action.payload
            }   

            localStorage.setItem("auth", JSON.stringify( newAuthState ))
            return newAuthState;

       
        case AuthActionType.LOGIN_SUCCESS : 
            const newLoginState = {
                isLoggedIn : true,
                user : action.payload 
            };

            axios.defaults.headers.common["Authorization"] = `Bearer ${action.payload.token}`
            localStorage.setItem("auth", JSON.stringify(newLoginState))
            return newLoginState;

        case AuthActionType.LOGOUT_SUCCESS :
            localStorage.removeItem("auth")
            return newAuth;
        
        case AuthActionType.LOGOUT_FAIL : 
            localStorage.removeItem("auth")
            return newAuth

        case AuthActionType.PROFILE_COMPLETION_SUCCESS : 
            const profileCompletionState = {
                isLoggedIn : true,
                user : {
                    ...state.user,
                    ...action.payload
                }
            }   


            localStorage.setItem("auth", JSON.stringify( profileCompletionState ))
            return profileCompletionState;

       

        default : return state
    }
 }


 

export default authReducer;