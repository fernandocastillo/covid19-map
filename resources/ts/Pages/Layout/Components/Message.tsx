import { usePage } from '@inertiajs/react'

export default ()=>{

    //@ts-ignore
    const { error, success } : {error: string, success: string}  = usePage().props

    const errorMessage = (
        <div
            className="mt-5 alert flex overflow-hidden rounded-lg bg-red-500/10 text-red-500 dark:bg-secondary-light/15 dark:text-secondary-light"
        >
            <div className="w-1.5 bg-red-500"></div>
            <div className="p-4">{error}</div>
        </div>
    )

    const successMessage = (
        <div
            className="mt-5 alert flex overflow-hidden rounded-lg bg-green-500/10 text-green-500 dark:bg-secondary-light/15 dark:text-secondary-light"
        >
            <div className="w-1.5 bg-green-500"></div>
            <div className="p-4">{success}</div>
        </div>
    )

    

    return error ? errorMessage : success ? successMessage: null
}