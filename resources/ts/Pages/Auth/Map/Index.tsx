
import Map from "./Map"
import Country from "./Country"
import { CountryModel,CardType, Bubble } from "../../../types"
import { useState } from "react"

export default ({
    countries
}:{ countries: {data: Array<CountryModel>} })=>{


    const [countrySelected, setCountrySelected] = useState('')
    const [countriesAdded, setCountriesAdded] = useState<Array<CountryModel>>([])
    const [bubbles, setBubbles] = useState<Array<Bubble>>([])

    const onAdd=()=>{
        const found = countries.data.find(e=>e.id == parseInt(countrySelected))
        if(found){
            const tmp = [...countriesAdded]
            tmp.push(found)
            setCountriesAdded([...tmp])
        }        
    }

    const onDelete = (i:number)=>{
        setBubbles([])
        const tmp = [...countriesAdded]
        tmp.splice(i,1)
        setCountriesAdded([...tmp])
    }

    const onSelectCardMap = (card: CardType, country_id: number)=>{        

        const c = countriesAdded.find(e=>e.id==country_id)
        if(c && card!=''){
            

            const max = Math.max(...c.states.map(s=>s[card]))
            
            const tmpBubbles = c.states.map(state=>{
                //@ts-ignore
                const radius = parseInt((state[card] * 20) / max)
                

                return {
                    centered: state.topo_key,
                    fillKey: "MINOR",
                    radius,
                    state: `${state.name } with ${state[card]} ${card}`
                }          
            })

            setBubbles([...tmpBubbles])
            
        }
        

    }
    
    return (
        <>  
            <div className="grid grid-cols-1 md:grid-cols-2 p-5">
                <div>
                    <Map 
                        bubbles={bubbles}                        
                         />
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
                        onSelectCardMap={(card: CardType, country_id: number)=>{
                            setBubbles([])
                            setTimeout(()=>{
                                onSelectCardMap(card, country_id)
                            },500)
                            
                        }} 
                    />)}

                    
                </div>
                </div>
           
        </>
    )
}