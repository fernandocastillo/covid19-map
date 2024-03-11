import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
//import { REHYDRATE } from "redux-persist";


interface User {
    name?: string,
    email?: string,
    stripe_subscription?: {
        status?: string
        trial_end_date?: string
    },
    isa?: boolean
}

export interface AuthState {
    user: User,
    token: string
}

const initialState: AuthState = {
    user: {},
    token: ''
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<{token: string}>) =>{            
            state.token = action.payload.token
        },
        user: (state, action: PayloadAction<{user: User}>) =>{            
            state.user = action.payload.user
        },
        logout: state => {
            state.user = initialState.user
            state.token = initialState.token
        }
    },
    /*extraReducers: (builder) => {
        builder.addCase(REHYDRATE, (state, action) => {
          console.debug("action", action)
          if(action.payload){
            state.token = action.payload.auth.token
            state.user = action.payload.auth.user
          }
          
        })
    }*/
})

// Action creators are generated for each case reducer function
export const { login, logout, user } = authSlice.actions

export default authSlice.reducer