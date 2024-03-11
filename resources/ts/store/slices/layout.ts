import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { LayoutState, Option } from '../../types'

const initialState: LayoutState = {
    sidebar_open: false,    
    sidebar_inner_options: [],
    sidebar_inner_title: 'Home',
    confirm_modal: false,        
}

export const layoutSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        open_sidebar: (state) =>{
            state.sidebar_open = true
        },
        toggle_sidebar: (state) =>{
            state.sidebar_open = !state.sidebar_open
        },
        close_sidebar: (state) =>{
            state.sidebar_open = false
        },
        update_inner_siderbar:(state, action: PayloadAction<{options: Array<Option>, title: string}>)=>{
            state.sidebar_inner_options = action.payload.options
            state.sidebar_inner_title = action.payload.title
        },
        confirm: (state, action: PayloadAction<{success: string}>)=>{
            state.confirm_modal = true
            state.confirmed_action = action.payload.success
        },
        closeConfirm: (state)=>{
            state.confirm_modal = false
            state.confirmed = false
            state.confirmed_action = undefined
        },
        confirmed: (state)=>{
            state.confirm_modal = false
            state.confirmed = true
        }
        /*user: (state, action: PayloadAction<{user: User}>) =>{            
            state.user = action.payload.user
        },*/
        
    }
})

// Action creators are generated for each case reducer function
export const { 
    open_sidebar, 
    toggle_sidebar, 
    close_sidebar,
    update_inner_siderbar,
    confirm,
    closeConfirm,
    confirmed
} = layoutSlice.actions

export default layoutSlice.reducer