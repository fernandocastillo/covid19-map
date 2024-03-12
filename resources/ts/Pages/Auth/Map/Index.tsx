
import Map from "./Map"
import Country from "./Country"
import { CountryModel, StateModel } from "../../../types"
import { useState } from "react"
import State from "./State"
import axios from "axios"

export default ({
    countries,
    countriesAdded: countriesAddedBackend
}:{ countries: {data: Array<CountryModel>}, countriesAdded:{data: Array<CountryModel>} })=>{    

    const [countrySelected, setCountrySelected] = useState('')
    const [countryInTheMap, setCountryInTheMap] = useState<CountryModel | null>()
    const [countriesAdded, setCountriesAdded] = useState<Array<CountryModel>>([...countriesAddedBackend.data])    
    const [stateSelected, setStateSelected] = useState<StateModel | 'not_found'>()    

    const syncUserCountries = (countries:any)=>{
        axios.put('/sync',{
            countries
        })
    }
    
    const onAdd=()=>{
        const exist = countriesAdded.find(e=>e.id== parseInt(countrySelected))
        if(exist) return
        const found = countries.data.find(e=>e.id == parseInt(countrySelected))
        if(found){
            const tmp = [...countriesAdded]
            tmp.push(found)
            setCountriesAdded([...tmp])

            if(!countryInTheMap) setCountryInTheMap({...found})
            syncUserCountries([...tmp].map(c=>c.id))
        }  
    }

    const onDelete = (i:number)=>{        
        const tmp = [...countriesAdded]
        tmp.splice(i,1)
        setCountriesAdded([...tmp])
        syncUserCountries([...tmp].map(c=>c.id))
    }

    const onChangeMap =(country_id:number)=>{
        setCountryInTheMap(null)
        const found = countries.data.find(e=>e.id == country_id)
        if(found) {
            setTimeout(()=>{
                setCountryInTheMap({...found})
            },300);
        }
    }
    

    const onSelectState  = (id:string)=>{
        const state = countryInTheMap?.states.find(s=>s.topo_key==id)
        if(state) {
            
            setStateSelected({...state})                        
                
            setTimeout(()=>{
                const p = {
                    [id]: { fillKey: "MINOR" },
                }                
                //@ts-ignore                    
                window.mappy.updateChoropleth(p, {reset: true})
            },200)
                                    
        }else{
            setStateSelected('not_found')
        }
    }
    
    return (
        <>  
            <div className="grid grid-cols-1 md:grid-cols-2 p-5">
                <div>
                    {countryInTheMap ? (
                        <Map                             
                            dataUrl={countryInTheMap?.datamap_topo_url}
                            scope={countryInTheMap?.datamap_scope}
                            scale={countryInTheMap?.datamap_scale}
                            center_x={countryInTheMap?.datamap_center_x}
                            center_y={countryInTheMap?.datamap_center_y}
                            selectState={onSelectState}                               
                            />
                    ): null}
                    
                </div>
                <div className=" space-y-4">

                    
                <label className="block">
                <div className="mb-1.5">Select a country</div>
                    <div className="relative flex -space-x-px ">

                        <select
                            className="rounded-l-lg border border-slate-300  form-select w-full  bg-white px-3 py-2 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:bg-navy-700 dark:hover:border-navy-400 dark:focus:border-accent"
                            value={countrySelected}
                            onChange={e=>setCountrySelected(e.target.value)}
                            >
                            <option value="" disabled>Select an option</option>
                            { countries.data.map(country => <option key={`country-${country.id}`} value={country.id}>{country.name}</option>) }                            
                            
                        </select>

                     
                        <button 
                            type="button"
                            onClick={onAdd}
                            className="btn rounded-l-none bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90">
                            Add
                        </button>
                    </div>
                    </label>

                    { countriesAdded.map((c,i)=> <Country 
                        key={`country-added-${i}`} country={c} 
                        onDelete={()=>onDelete(i)} 
                        onChangeMap={onChangeMap}
                        
                    />)}


                    {stateSelected  ? <State state={stateSelected} /> : null}
                    
                </div>
                </div>
           
        </>
    )
}