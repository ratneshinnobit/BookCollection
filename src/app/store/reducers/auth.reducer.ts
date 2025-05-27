import { createReducer, on } from "@ngrx/store"
import { authAction } from "../actions/auth.action"
import { AuthState } from "../../core/model/loginData.model"


const initialState:AuthState={
    isAuthenticated:false,
    token:null


}
console.log("state0",initialState)

export const  authReducer=createReducer(
    initialState,
    on(authAction.login,(state,action)=>(
        {
            ...state,
            isAuthenticated:action.payload.isAuthenticated,
            token:action.payload.token
        }

    )),

    on(authAction.logout, (state) => ({
        ...state,
        isAuthenticated: false,
        token: null
      }))

)