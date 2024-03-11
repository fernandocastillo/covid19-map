
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { usePopper } from 'react-popper';
import { useDetectClickOutside } from 'react-detect-click-outside'
import Tippy from '@tippyjs/react';
import { RootState } from "../../../store";
import { router, Link } from '@inertiajs/react'
import { close_sidebar } from "../../../store/slices/layout";
import logo from '../../../../../public/img/logo.png'
import { MapIcon, UserIcon, BookOpenIcon } from "@heroicons/react/24/outline";
import { usePage } from '@inertiajs/react'
import { User } from "../../../types";


const Sidebar = ()=>{


    const [referenceElement, setReferenceElement] = useState<any>(null);
    const [popperElement, setPopperElement] = useState<any>(null);
    const [isShowPopper, setIsShowPopper] = useState(false);
    const [buildOptions, setBuildOptions] = useState({});    
    const dispatch = useDispatch()
    //@ts-ignore
    const { user } : {user: User} = usePage().props

    
    //const { triggerLogout }  = useLogout()
    const triggerLogout = ()=>{
        router.post('/logout')
    }
    
    

    const { 
        sidebar_inner_title,
        sidebar_open,
        sidebar_inner_options
    } = useSelector((state: RootState)=> state.layout)
    
    const tmp = (options: any) => {
        const config = {
          placement: options.placement ?? "auto",
          strategy: options.strategy ?? "fixed",
          onFirstUpdate: options.onFirstUpdate ?? function () {},
      
          modifiers: [
            {
              name: "offset",
              options: {
                offset: [0, options.offset ?? 0],
              },
            },
          ],
        };
      
        if (options.modifiers) config.modifiers.push(...options.modifiers);
      
        return config;
    };
    
    useEffect(()=>{        
        setBuildOptions(tmp({placement:'right-end',offset:12}))
        //dispatch(layoutActions.updateFormOptions(forms))
    },[])

    const { styles, attributes } = usePopper(referenceElement, popperElement, buildOptions);

    const closeDropdown = ()=>{
        setIsShowPopper(false)
    }

    const toggleShowPopper = ()=>{
        setIsShowPopper(!isShowPopper)
    }

    const ref = useDetectClickOutside({ onTriggered: closeDropdown });

    
    const go =  (url:string)=>{
        dispatch(close_sidebar())
        router.get(url)
    }

    return (
        <>

<div className="sidebar print:hidden">
        {/* Main Sidebar */}
        <div className="main-sidebar">
          <div className="flex h-full w-full flex-col items-center border-r border-slate-150 bg-white dark:border-navy-700 dark:bg-navy-800">
            {/* Application Logo */}
            <div className="flex pt-4">
              <Link href="/">
                <img className="h-11 w-11 transition-transform duration-500 ease-in-out hover:rotate-[360deg]" src={logo} alt="logo" />
              </Link>
            </div>
            {/* Main Sections Links */}
            <div className="is-scrollbar-hidden flex grow flex-col space-y-4 overflow-y-auto pt-6">
                
                <button onClick={()=>dispatch(close_sidebar())}  className="sm:hidden cursor-pointer flex h-11 w-11 items-center justify-center rounded-lg outline-none transition-colors text-mylife-medium duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25" >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>                            
                </button>                                

                <Tippy content="Map" placement="right" >
                    <button onClick={()=>go('/')}  className="cursor-pointer flex h-11 w-11 items-center justify-center rounded-lg outline-none transition-colors text-mylife-medium duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25" >
                        <MapIcon className="w-6 h-6" />
                    </button>
                </Tippy>
                

                <Tippy content="Users" placement="right" >
                    <button onClick={()=>go('/users')}  className="cursor-pointer flex h-11 w-11 items-center justify-center rounded-lg outline-none transition-colors text-mylife-medium duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25" >
                        <UserIcon className="w-6 h-6" />
                    </button>
                </Tippy>
              
            </div>
            {/* Bottom Links */}
            <div className="flex flex-col items-center space-y-3 py-3">
              
              {/* Profile */}
              <div ref={ref}  className="flex">
                <button onClick={toggleShowPopper} ref={setReferenceElement} className="avatar h-12 w-12">
                  <img className="rounded-full" src="https://cdn-icons-png.freepik.com/512/7022/7022927.png" alt="avatar" />
                  {/*<span className="absolute right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-success dark:border-navy-700" />*/}
                </button>
                <div className={`${isShowPopper && 'show'} popper-root fixed`} ref={setPopperElement} style={styles.popper} {...attributes.popper}>
                  <div className="popper-box w-64 rounded-lg border border-slate-150 bg-white shadow-soft dark:border-navy-600 dark:bg-navy-700">
                    <div className="flex items-center space-x-4 rounded-t-lg bg-slate-100 px-4 py-5 dark:bg-navy-800">
                      <div className="avatar h-14 w-14">
                        <img className="rounded-full" src="https://cdn-icons-png.freepik.com/512/7022/7022927.png" alt="avatar" />
                      </div>
                      <div>
                        <div className="text-base font-medium text-slate-700 hover:text-mylife-light focus:text-mylife-light dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light">
                          {user.name}
                        </div>
                        <p className="text-xs text-slate-400 dark:text-navy-300 break-all">
                        {user.email}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col pb-5 pt-2">
                        
                      <div className="mt-3 px-4">
                        <button onClick={triggerLogout}  type="button" className="cursor-pointer btn h-9 w-full space-x-2 bg-orange-500 text-white hover:bg-orange-700 focus:bg-orange-700 active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                          </svg>
                          <span>Logout</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Sidebar Panel */}
        
        
        
      </div>
        </>
    )

}

export default Sidebar