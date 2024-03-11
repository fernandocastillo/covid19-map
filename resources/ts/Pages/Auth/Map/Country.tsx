import { TrashIcon, UsersIcon } from "@heroicons/react/24/outline"
import { CountryModel } from "../../../types"

const InfoCard = ({
    title,
    number,
    onSelectCardMap,
    country_id
}:{
    title: string,
    number: number,
    onSelectCardMap: any,
    country_id: number
})=>{

    return (
        <div className="rounded-lg bg-slate-150 p-4 dark:bg-navy-700 cursor-pointer" onClick={()=>onSelectCardMap(title.toLowerCase(), country_id)}>
            <div className="flex justify-between space-x-1">
            <p className="text-xl font-semibold text-slate-700 dark:text-navy-100">
                {number}
            </p>
            <UsersIcon className="size-5 text-primary dark:text-accent" />
            
            </div>
            <p className="mt-1 text-xs+">{title}</p>
        </div>
    )
}

export default ({
    country,
    onDelete,
    onSelectCardMap
}: {country: CountryModel, onDelete: any, onSelectCardMap: any}) => {

    return (
        <div className="card px-4 py-4 sm:px-5">

                    <div className="flex items-center justify-between space-x-2">
                        <p className="font-medium text-slate-700 line-clamp-1 dark:text-navy-100 mb-5">{country.name}</p>
                        <div className="flex space-x-2">
                        <button 
                            className="btn size-7 bg-primary/10 p-0 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
                            onClick={onDelete}
                            >
                            
                            <TrashIcon className="size-4.5" />                                
                        </button>
                            
                        </div>
                        </div>

                        
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-4">
                        <InfoCard title="Active" number={country.active} onSelectCardMap={onSelectCardMap} country_id={country.id} />
                        <InfoCard title="Recovered" number={country.recovered} onSelectCardMap={onSelectCardMap} country_id={country.id} />
                        <InfoCard title="Deceased" number={country.deceased} onSelectCardMap={onSelectCardMap} country_id={country.id} />
                        <InfoCard title="Total" number={country.total} onSelectCardMap={onSelectCardMap} country_id={country.id} />
                    </div>


        </div>
    )

}