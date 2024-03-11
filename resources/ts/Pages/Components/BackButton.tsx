
import { ChevronLeftIcon } from "@heroicons/react/24/outline"

export default()=>{

    return (
        <button 
            className="btn rounded-full bg-slate-300 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
            onClick={()=>window.history.back()}
            type="button"
        >
            <ChevronLeftIcon className="h-4 w-4 mr-2" />
            Regresar
      </button>
    )
}