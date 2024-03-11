import { ArrowUpTrayIcon } from "@heroicons/react/24/outline"
import { useState, useEffect } from "react"

export default ({
    label, image_url, onChange, error
}:{ label:string, image_url: string, onChange: (e:any) => void, error?: string}) => {
    
    const [preview, setPreview] = useState(image_url)
    const [file, setFile] = useState()

    const onSelectFile = (e:any) => {
        if (!e.target.files || e.target.files.length === 0) {            
            //setPreview(undefined)
            return
        }

        // I've kept this example simple by using the first image instead of multiple
        setFile(e.target.files[0])
        onChange(e.target.files[0])
    }

    useEffect(() => {
        if (!file) {
            //setPreview(undefined)
            return
        }

        //@ts-ignore
        const objectUrl = URL.createObjectURL(file)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [file])

    useEffect(() => {
        setPreview(image_url)
    },[image_url]);

    return (
        <div>
            <div className="mb-1.5 ">{label}</div>
            
            <div className="md:flex md:space-x-3">
                
                { preview ? (
                    <a href={preview} target="_blank">
                        <div className="avatar size-28">
                        <img
                            className="rounded-lg"
                            src={preview}
                            alt="avatar"
                            />
                            </div>
                    </a>
                ) : null}                                    
                
                <div>
                    <label className="btn bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90">                                        
                        <input
                            type="file"
                            className="pointer-events-none absolute inset-0 h-full w-full opacity-0"
                            accept="image/png, image/gif, image/jpeg" 
                            onChange={onSelectFile}
                            />
                        <div className="flex items-center space-x-2">
                            <ArrowUpTrayIcon className="size-5" />
                            <span>Elegir Archivo</span>
                        </div>
                    </label>
                </div>                                
            </div>
            
            {error && <div className="badge bg-error text-white mt-1">{error}</div>}
        </div>
    )

    

}