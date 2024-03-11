import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { useDispatch } from "react-redux";
import { close_sidebar } from "../../../store/slices/layout";
import { router } from "@inertiajs/react";


const InnerSidebar = ()=>{

    const dispatch = useDispatch()
    

    const {
        sidebar_inner_title,
        sidebar_inner_options=[]
    } = useSelector((state: RootState)=> state.layout)

    const go = (to: string)=>{
        dispatch(close_sidebar())
        router.get(to)
    }

    

    return (
        <>
        {/* Sidebar Panel */}
        <div className="sidebar-panel">
          <div className="flex h-full grow flex-col bg-white pl-[var(--main-sidebar-width)] dark:bg-navy-750">
            {/* Sidebar Panel Header */}
            <div className="flex h-18 w-full items-center justify-between pl-4 pr-1">
                
              <p className="text-base tracking-wider text-mylife-medium dark:text-navy-100">
                {sidebar_inner_title}
              </p>
              <button onClick={()=>dispatch(close_sidebar())}  className="btn fer h-7 w-7 rounded-full p-0 text-primary hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-accent-light/80 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25 xl:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            </div>
            {/* Sidebar Panel Body */}

            <ul className="flex flex-1 flex-col px-4 font-inter">
                {sidebar_inner_options.map((e:any,index:number)=>(
                    <li key={`li-${index}`}>
                    <div                        
                        onClick={()=>go(e.href)}
                        className="cursor-pointer text-mylife-dark capitalize hover:text-slate-900 dark:text-navy-200 dark:hover:text-navy-50 flex py-2 text-xs+ tracking-wide outline-none transition-colors duration-300 ease-in-out"                        
                    >
                        {e.label.toLowerCase()}
                    </div>
                    </li>
                ))}
            </ul>

          </div>
        </div>
        </>
    )
}

export default InnerSidebar