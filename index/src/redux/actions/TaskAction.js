import { GetTasksActionType } from "./type";

import axios from 'axios'

export const GetAllTasksAction = (taskState) => {
    return async (dispatch) => {
        try {
            const {data}= await axios.get("/tasks");
            const tasks = data.data.data;
            
             
            dispatch({
                type : GetTasksActionType.GET_TASKS_SUCCESS,
                payload : tasks
            })
           
        } catch (error) {
            if(error.message){
            dispatch({
                type : GetTasksActionType.GET_TASKS_FAIL,
                payload : error.message
            })
        }
        }
    }
}