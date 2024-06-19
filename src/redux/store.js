import { createStore, combineReducers } from "redux"
import userReducer from "./reducers/userReducers"
import todoReducer from "./reducers/todoReducer"

const rootReducer = combineReducers({
    todoReducer,
    userReducer
})

const store = createStore(rootReducer)

export default store