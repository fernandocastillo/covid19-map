
import { StateModel } from "../../../types"

import InfoCard from "./InfoCard"

export default ({
    state
}: {state: StateModel | 'not_found'}) => {

    return (
        <div className="card px-4 py-4 sm:px-5 ">
            <div className="flex items-center justify-between space-x-2">
                <p className="font-medium text-slate-700 line-clamp-1 dark:text-navy-100 mb-5">{state == 'not_found' ? 'State not found': state.name}</p>                
            </div>

            {
                state!=='not_found' ? (
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-4">
                        <InfoCard title="Active" number={state.active}  />
                        <InfoCard title="Recovered" number={state.recovered} />
                        <InfoCard title="Deceased" number={state.deceased} />
                        <InfoCard title="Total" number={state.total} />
                    </div>
                ) : null
            }
                
            
        </div>
    )

}