import { AuthActionType } from "../actions/type";

const authError = {
    message : ""
};

const authErrorReducer = (state = authError, action) => {
    switch (action.type) {
        case AuthActionType.SIGNUP_FAIL:
            
            return {message : action.payload}

        case AuthActionType.LOGIN_FAIL:
            
                return {message : action.payload}
    
        default:
           return state;
    }
}

export default authErrorReducer