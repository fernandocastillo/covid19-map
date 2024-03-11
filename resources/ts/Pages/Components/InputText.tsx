
import Datepicker from "react-tailwindcss-datepicker";

type InputFormProps = {
    type?: string,
    label: string,
    value: string,    
    onChange: (e:any) => void,
    error?: string
}

export default ({
    type='text',
    label,
    value,
    onChange,
    error
}: InputFormProps)=>{


    return (
        <label className="block">
            <span className=" font-semibold">{label}</span>
            <span className="relative mt-1.5 flex">
                { type=='date' ?  (
                    <Datepicker
                        i18n={"es"}
                        value={{
                            startDate: new Date(value + ' 23:59:59'),
                            endDate: new Date(value + ' 23:59:59')
                        }} 
                        onChange={e => onChange(e?.startDate)} 
                        inputClassName="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-orange-300 focus:border-orange-500 dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                        asSingle={true}                         
                    /> 
                ) : (
                        <input
                            className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-orange-300 focus:border-orange-500 dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                            type={type}
                            value={value} onChange={e => onChange(e.target.value)}
                            />
                    )
                }
                
            </span>
            {error && <div className="badge bg-error text-white mt-1">{error}</div>}
        </label>        
    )
}