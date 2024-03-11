
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { RootState } from "../../../store";
import { useDispatch } from "react-redux";
import { toggle_sidebar } from "../../../store/slices/layout";




export default () => {

    const { sidebar_open=false, sidebar_inner_options } = useSelector((state: RootState)=> state.layout)
    
    
    const dispatch = useDispatch()    
        

    return (
        <>
        {/* App Header Wrapper*/}
      <nav className="header before:bg-white dark:before:bg-navy-750 print:hidden">
        {/* App Header  */}
        <div className="header-container relative flex w-full bg-white dark:bg-navy-700 print:hidden">
          {/* Header Items */}
          <div className="flex w-full items-center justify-between">
            {/* Left: Sidebar Toggle Button */}
            <div className="h-7 w-7">
                <button 
                    className={`${sidebar_open ? 'active' : ''}  sm:hidden menu-toggle ml-0.5 flex h-7 w-7 flex-col justify-center space-y-1.5 text-primary outline-none focus:outline-none dark:text-accent-light/80`} 
                    onClick={()=>dispatch(toggle_sidebar())}
                    >
                    <span />
                    <span />
                    <span />
                </button>
                
              
            </div>
            {/* Right: Header buttons */}
            <div className="-mr-1.5 flex items-center space-x-2 font-bold text-lg">
                COVID 19 :: Map Information System  
            </div>
          </div>
        </div>
      </nav>
        </>
    )
}