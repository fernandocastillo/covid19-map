import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store"
import { LayoutState } from "../types"
import { confirm, closeConfirm } from "../store/slices/layout"

export default (id: string,action: ()=>void)=>{

    const dispatch = useDispatch()

    const { 
        confirmed,
        confirmed_action
    }:LayoutState = useSelector((state: RootState)=> state.layout)

    useEffect(()=>{
        if(confirmed && confirmed_action== id){
            action()
            dispatch(closeConfirm())
        }

    },[confirmed,confirmed_action])

    return () => dispatch(confirm({success: id}))

}