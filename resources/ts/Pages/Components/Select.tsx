
type Option = {
    id: number,
    name: string
}

type SelectFormProps = {    
    label: string,
    value: string,    
    onChange: (e:any) => void,
    error?: string,
    options: Array<Option>
    required?: boolean
}

export default ({    
    label,
    value,
    onChange,
    error,
    options,
    required=false
}: SelectFormProps)=>{
    return (
        <label className="block  w-full ">
            <span className="font-semibold">{label}</span>
            <select 
                value={value}
                onChange={e => onChange(e.target.value)}
                className="form-select mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 hover:border-slate-400 focus:border-orange-500 dark:border-navy-450 dark:bg-navy-700 dark:hover:border-navy-400 dark:focus:border-accent"
                required={required}
            >
                <option  value="" disabled>Seleccione una opción</option>
                {options.map(option=>(
                    <option key={`select-category-${option.id}`} value={option.id}>{option.name}</option>
                ))}                
                
            </select>
            {error && <div className="badge bg-error text-white mt-1">{error}</div>}
        </label>

    )
}