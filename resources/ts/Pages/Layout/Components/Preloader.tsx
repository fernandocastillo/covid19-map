import { useEffect } from 'react';

export default () =>{
    
    useEffect(()=>{
        setTimeout(() => {
            const preloader = document.querySelector(".app-preloader");
            if (!preloader) return;
            preloader.classList.add(
              "animate-[cubic-bezier(0.4,0,0.2,1)_fade-out_500ms_forwards]"
            );
            setTimeout(() => preloader.remove(), 1000);
          }, 150);
    });

    return (        
        <div className="app-preloader fixed z-50 grid h-full w-full place-content-center bg-slate-50 dark:bg-navy-900">
            <div className="app-preloader-inner relative inline-block h-48 w-48"></div>
        </div>
    )
}





