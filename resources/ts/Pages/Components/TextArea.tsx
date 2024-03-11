

type InputFormProps = {    
    label: string,
    value: string,    
    onChange: (e:any) => void,
    error?: string
}

export default ({    
    label,
    value,
    onChange,
    error
}: InputFormProps)=>{
    return (
        <label className="block">
            <span className="font-semibold">{label}</span>
            <span className="relative flex">
                <textarea 
                    rows={4} 
                    onChange={e => onChange(e.target.value)}                    
                    value={value}
                    className="form-textarea mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent p-2.5 placeholder:text-slate-400/70 hover:border-orange-300 focus:border-orange-500 dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent" 
                    />
            </span>
            {error && <div className="badge bg-error text-white mt-1">{error}</div>}
        </label>        
    )
}