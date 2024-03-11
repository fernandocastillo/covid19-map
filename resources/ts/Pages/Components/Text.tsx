
interface Props {
    label: string,
    value: any,
    onChange: (e:any)=> void,
    error?: string | undefined,
    icon?: any,
    type?: string
}
export default ({label, value, onChange, error, icon, type='text'}:Props)=>{
    return (
        <label className="block">
            <span>{label}:</span>
            <span className="relative flex">
                <input 
                    value={value} onChange={onChange}
                    className={`form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 ${icon ? 'pl-9' : null} placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-orange-500 dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent`}                    
                    type={type} />
                    {
                        icon ? (
                            <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-orange-500 dark:text-navy-300 dark:peer-focus:text-accent">
                                {icon}
                            </span>
                        ) : null
                    }
                
            </span>
            {error && <p className="mt-2 alert flex rounded-full bg-navy-500/10 py-1 px-4 text-navy-500 dark:bg-mylife-medium/15 dark:text-secondary-light sm:px-5">{error}</p>}
        </label>
    )
}