import { TrashIcon } from "@heroicons/react/24/outline"
import { CountryModel } from "../../../types"

import InfoCard from "./InfoCard"

export default ({
    country,
    onDelete,
    onChangeMap
}: {country: CountryModel, onDelete?: any, onChangeMap?: any}) => {

    return (
        <div className="card px-4 py-4 sm:px-5 bg-slate-300 ">
            <div className="flex items-center justify-between space-x-2">
                <p className="font-medium  line-clamp-1 dark:text-navy-100 mb-5 cursor-pointer border-b border-dotted border-current text-primary" onClick={()=>onChangeMap(country.id)}>{country.name}</p>
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
                <InfoCard title="Active" number={country.active}  />
                <InfoCard title="Recovered" number={country.recovered} />
                <InfoCard title="Deceased" number={country.deceased} />
                <InfoCard title="Total" number={country.total}  />
            </div>
        </div>
    )

}