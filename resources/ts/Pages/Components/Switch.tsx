

type InputFormProps = {    
    label: string,
    value: boolean,    
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
        <label className="inline-flex items-center space-x-2">
            <input
                className="form-switch h-5 w-10 rounded-full bg-slate-300 before:rounded-full before:bg-slate-50 checked:bg-orange-500 checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-accent dark:checked:before:bg-white"
                type="checkbox"
                checked={value}
                onChange={()=>onChange(!value)}
            />
            <span>{label}</span>
            {error && <div>{error}</div>}
        </label>
    )
}