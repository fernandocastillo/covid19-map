import { ArrowPathIcon } from "@heroicons/react/24/outline"
interface Props{
    children: any,
    type?: "button" | "submit" | "reset" | undefined,
    loading: boolean,
    full?: boolean,
    className?: string
}

export default ({children, type="button", loading=false, full=true, className} : Props)=>{
    return (
        <button 
            disabled={loading}
            type={type}
            className={`${className ?? ''} ${loading ? ' animate-bounce--  bg-orange-500/50' : 'bg-orange-500'} btn mt-5- ${full} font-medium text-white hover:bg-orange-600 focus:bg-orange-600 active:bg-orange-600/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90`}
            >
            {children}
            
            { loading ? <ArrowPathIcon className="ml-3 w-5 animate-spin" /> : null }
            
        </button>
    )
}