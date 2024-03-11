import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { CategoriesState, Category } from '../../types'
import axios from 'axios'

const initialState: CategoriesState = {    
    categories: [],
    modalOpen:false,
    modalSubmitUrl: '',
}

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        setCategories: (state, action: PayloadAction<{categories: Array<Category>}>) =>{
            state.categories = action.payload.categories
        },
        up: (state, action: PayloadAction<{index: number, parent_index?: number}>) =>{
            let tmp = [...state.categories]
            const {parent_index, index} = action.payload

            if(parent_index!=undefined){
                // @ts-ignore
                tmp[parent_index]['children'].move(index,index-1)
            }else{
                tmp.move(index,index-1)
            }
            
            state.categories = tmp
            axios.put('/categories',{categories: state.categories})
        },
        down: (state, action: PayloadAction<{index: number, parent_index?: number}>) =>{
            let tmp = [...state.categories]
            const {parent_index, index} = action.payload

            if(parent_index!=undefined){
                // @ts-ignore
                tmp[parent_index]['children'].move(index,index+1)
            }else{
                tmp.move(index,index+1)
            }
            
            state.categories = tmp
            axios.put('/categories',{categories: state.categories})
        },
        openModal: (state, action: PayloadAction<{parent_id: number | undefined}>) =>{
            state.modalOpen = true
            if(action.payload.parent_id){
                state.modalSubmitUrl = '/categories/' +action.payload.parent_id,
                state.modalParentId = action.payload.parent_id
            }else{
                state.modalSubmitUrl = '/categories'
                state.modalParentId = undefined
            }
        },
        closeModal: (state) =>{
            state.modalOpen = false
            state.modalSubmitUrl = ''
            state.modalParentId = undefined
        },
        updateName: (state, action: PayloadAction<{name: string, index: number, parent_index?: number}>) =>{
            const {parent_index, index} = action.payload
            
            if(parent_index!=undefined){
                // @ts-ignore
                state.categories[parent_index]['children'][index].name = action.payload.name
            }else{
                state.categories[index].name = action.payload.name
            }
            
            axios.put('/categories',{categories: state.categories})
        },
        remove: (state, action: PayloadAction<{index: number, parent_index?: number}>) =>{
            const {index, parent_index} = action.payload
            let category
            if(parent_index!=undefined){
                // @ts-ignore
                category = {...state.categories[parent_index]['children'][index]}

                // @ts-ignore
                state.categories[parent_index]['children'].splice(index, 1)
            }else{
                category = {...state.categories[index]}
                state.categories.splice(index, 1)
            }
            
            axios.delete('/categories/' + category.id)
        },
    }
})

// Action creators are generated for each case reducer function
export const { 
    setCategories,
    up,
    down,
    openModal,
    closeModal,
    updateName,
    remove
} = categoriesSlice.actions

export default categoriesSlice.reducer