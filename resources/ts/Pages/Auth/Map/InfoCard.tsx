import { UsersIcon } from "@heroicons/react/24/outline"

export default ({
    title,
    number,    
}:{
    title: string,
    number: number,    
})=>{

    return (
        <div className="rounded-lg bg-slate-150 p-4 dark:bg-navy-700 ">
            <div className="flex justify-between space-x-1">
            <p className="text-xl font-semibold text-slate-700 dark:text-navy-100">
                {number}
            </p>
            <UsersIcon className="size-5 text-slate-500 dark:text-accent" />
            
            </div>
            <p className="mt-1 text-xs+">{title}</p>
        </div>
    )
}