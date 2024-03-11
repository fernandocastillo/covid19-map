import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useDispatch, useSelector } from "react-redux"
import { RootState } from '../../store'
import { LayoutState } from '../../types'
import { closeConfirm, confirmed } from '../../store/slices/layout'

export default function Confirm(){    

    const { 
        confirm_modal,        
    }:LayoutState = useSelector((state: RootState)=> state.layout)

    const dispatch = useDispatch()
    const close = ()=>{
        dispatch(closeConfirm())
    }

    return (
        <Transition appear show={confirm_modal} as={Fragment}>
            <Dialog as="div" className="relative z-[70]" onClose={()=>close()}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                            <Dialog.Title
                                as="h3"
                                className="text-2xl font-medium leading-6 text-gray-900 text-center mb-10"
                            >
                                Are you sure?
                            </Dialog.Title>
                            <div className="flex mt-4 justify-around">
                                    <button
                                        type="button"
                                        className="btn bg-orange-500 font-medium text-white hover:bg-orange-700 focus:bg-orange-700 active:bg-orange-700/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
                                        onClick={()=>{dispatch(confirmed()) }}
                                        >
                                    Continue
                                    </button>
                                    <button
                                        type="button"
                                        className="btn bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
                                        onClick={()=>close()}
                                        >
                                    Cancel
                                    </button>
                                </div>
                            
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
  }