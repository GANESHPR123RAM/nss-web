import { AdminActionType } from "./type";

import axios from 'axios'

export const UploadTaskAction = (taskState) => {
    return async (dispatch) => {
        try {
            const {data}= await axios.post("/tasks", taskState);
            const task = data.data;
            
            const newTask = {
                name : task.name,
                description : task.description,
                totalPoints : task.totalPoints,
                eachPoints : task.eachPoints,
                issuedDate : task.issuedDate,
                deadlineDate : task.deadlineDate
            } 
            dispatch({
                type : AdminActionType.UPLOAD_TASK_SUCCESS,
                payload : newTask
            })
           
        } catch (error) {
            if(error.message){
            dispatch({
                type : AdminActionType.UPLOAD_TASK_FAIL,
                payload : error.message
            })
        }
        }
    }
}