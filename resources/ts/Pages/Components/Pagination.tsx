import { router } from "@inertiajs/react"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";


type Link = {
    label: string,
    active: boolean
}
type Meta = {
    links: Array<Link>
}

export default ({
    meta
} : {meta: Meta})=>{

    const go = (link:any)=>{
        //console.debug(link)
        if(link.active || !link.url) return false;
        router.visit(link.url,{ preserveScroll: true })    
    }

    return (
        <ol className="pagination">

            {meta.links.map( (link, i)  =>(
                <li key={`link-${i}`} className={`${link.label.search('nterior') >=0 ? 'rounded-l-full bg-slate-150 dark:bg-navy-500': null} ${link.label.search('iguiente') >=0 ? 'rounded-r-full bg-slate-150 dark:bg-navy-500' : null} ${link.label.search('nterior') <0 && link.label.search('iguiente') <0 ? 'bg-slate-150 dark:bg-navy-500': null}`}>
                    <button
                        className={`
                            ${link.active ? 'flex h-8 min-w-[2rem] items-center justify-center rounded-full bg-orange-500 px-3 leading-tight text-white transition-colors hover:bg-orange-700 focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90' :null}
                            ${(link.label.search('nterior') >=0 || link.label.search('iguiente')) && !link.active ? 'flex h-8 w-8 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:text-navy-200 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90' :null}
                            ${ (link.label.search('nterior') <0 && link.label.search('iguiente') <0) && !link.active ? 'flex h-8 min-w-[3.5rem] items-center justify-center rounded-full px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90' : null}
                        `}
                        type="button"
                        onClick={()=>go(link)}
                    >
                        { link.label.search('nterior') >=0 ? <ChevronLeftIcon className="size-6"  /> : null }

                        { link.label.search('nterior') <0 && link.label.search('iguiente') <0 ? <span>{ link.label }</span>: null }

                        { link.label.search('iguiente') >=0 ? <ChevronRightIcon className="size-6"  /> : null }

                    </button>

                </li>
            ))}

        </ol>
    )
}