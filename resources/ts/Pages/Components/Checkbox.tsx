interface Props {
    children: any,
    checked: boolean,
    onChange: ()=>void
}
export default ({ children, checked, onChange }:Props) => {
    return (
        <label className="inline-flex items-center space-x-2">
            <input 
                checked={checked}
                onChange={onChange}
                className="form-checkbox is-basic h-5 w-5 rounded border-slate-400/70 checked:border-orange-500 checked:bg-orange-300 hover:border-orange-600 focus:border-orange-600 dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent" 
                type="checkbox" />
            <span className="line-clamp-1">{children}</span>
        </label>
    )
}