import { PlusIcon } from "@heroicons/react/24/outline"

export default ({
    action,
    children,
    color='green',
    icon=<PlusIcon className="size-5" />,
    className,
    type="submit"
}: {action: any, children?: any, color?: string, icon?: any, className?:string, type?: 'button' | 'submit'})=>{

    return (
        <button
            className={`
                btn space-x-2 rounded-full dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90
                ${ className ?? null}
                ${color === 'green' ? 'bg-success font-medium text-white hover:bg-success-focus focus:bg-success-focus active:bg-success-focus/90': null}
                ${color === 'gray' ? 'bg-slate-400 font-medium text-white hover:bg-slate-600 focus:bg-slate-500 active:bg-slate-500/90': null}
                `}
                
            onClick={()=>action()}
            type={type}
        >
            {icon}
            {
                children ? (
                    <span> {children} </span>
                ) : null
            }
            
        </button>
    )
}