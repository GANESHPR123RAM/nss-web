import { AdminActionType } from "../actions/type";
import { GetTasksActionType } from "../actions/type";



const taskState = []

const TaskReducer = (state = taskState, action) => {
    
    switch (action.type){
        case AdminActionType.UPLOAD_TASK_SUCCESS : 
            const newTask = action.payload
            const newState = [...state, newTask]

            return newState;

       
        case AdminActionType.UPLOAD_TASK_FAIL : 
            return state;

        case GetTasksActionType.GET_TASKS_SUCCESS:
            return action.payload;

        case GetTasksActionType.GET_TASKS_FAIL : 
        return state;

        default : return state
    }
 }

 export default TaskReducer
