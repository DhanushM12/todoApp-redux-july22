import { ADD_TASK, DELETE_TASK } from "../actions";
import { combineReducers } from "redux";

const taskReducers = (state=[], action) => {
    switch(action.type){
        case ADD_TASK:
            state = state.concat(action.payload)
            break;
        case DELETE_TASK:
            state = state.filter((val, id) => action.payload !== id);
            break;
        default:
            return state;
    }
    return state;
}

const reducers = combineReducers({
    tasks: taskReducers
})

export default reducers;