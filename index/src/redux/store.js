import { createStore , applyMiddleware , combineReducers } from 'redux';
import thunk from 'redux-thunk'
import authErrorReducer from './reducers/AuthErrorReducer';
import authReducer from './reducers/AuthReducer';
import TaskReducer from './reducers/TaskReducer';

const rootReducer = combineReducers({
    authState : authReducer,
    authError : authErrorReducer,
    tasks : TaskReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;