import{createStore,combineReducers,applyMiddleware} from "redux"
import { UserReducers } from "./Reducers/UserReducers"
import { thunk } from "redux-thunk";



const rootReducer =combineReducers({
    UserReducers
})

export const store =createStore(rootReducer,applyMiddleware(thunk));