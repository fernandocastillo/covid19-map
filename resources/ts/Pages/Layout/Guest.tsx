
import { router } from "@inertiajs/react"
import logoImage from '/public/img/logo.png';

export default ({ children } : {children:any}) => {

    return (
        <>
        

        <div className='min-h-100vh flex grow bg-slate-50 dark:bg-navy-900'>        
            <main className="grid w-full grow grid-cols-1 place-items-center">
            <div className="w-full max-w-[26rem] p-4 sm:px-5">
            <div className="text-center">
                <img className="mx-auto h-[150px] w-[150px] cursor-pointer" src={logoImage} alt="logo" onClick={()=>router.get('/')} />
                <div className="mt-4">
                <h2 className="text-2xl font-semibold text-mylife-dark dark:text-navy-100">
                    Map Information System
                </h2>                
                </div>
            </div>
            {children}
            <div className="mt-8 flex justify-center text-xs text-slate-400 dark:text-navy-300">
                <a href="https://freengers.com" target="_blank" className="hover:text-orange-500">2024 © Developed by <span className="text-orange-300">Fernando Castillo</span></a>
                {/*<div className="mx-3 my-1 w-px bg-slate-200 dark:bg-navy-500" />
                <a href="#">Term of service</a>*/}
            </div>
            </div>
        </main>
      </div>
      </>
    )
}