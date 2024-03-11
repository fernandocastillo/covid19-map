import { SimpleButton } from "../../Components"
import { router, Link } from "@inertiajs/react"
import { User } from "../../../types"
import { useConfirm } from "../../../hooks"
import { TrashIcon } from "@heroicons/react/24/outline"

const DeleteButton = ({user}: {user:User})=>{
    const confirm = useConfirm(`delete-user-${user.id}`, ()=>{ router.delete(`/users/${user.id}`) })
    return (
        <button
            className="btn size-9 rounded-full bg-red-500 p-0 font-medium text-white hover:bg-red-700 focus:bg-red-700 active:bg-red-700/90"
            onClick={()=>confirm()}
        >
            <TrashIcon className="size-5" />
            
        </button>
    )
}

export default ({
    users
}:{ users: Array<User>})=>{

    return (
        <>
            <div className="flex items-center justify-between py-5 lg:py-6">
                <div className="flex items-center space-x-1">
                    <h2 className="text-xl font-medium text-slate-700 line-clamp-1 dark:text-navy-50 lg:text-2xl">
                    Users
                    </h2>                
                </div>
                <div className="flex items-center space-x-1">
                    <SimpleButton action={()=> router.get('/users/new')}>
                        Add
                    </SimpleButton>
                </div>
            </div>

            <div className="is-scrollbar-hidden min-w-full overflow-x-auto card">
                <table className="w-full text-left">
                    <thead>
                    <tr className="border border-transparent border-b-slate-200 dark:border-b-navy-500">
                        
                        <th className="whitespace-nowrap px-3 py-3 font-semibold uppercase text-slate-800 dark:text-navy-100 lg:px-5">
                        Email
                        </th>
                        <th className="whitespace-nowrap px-3 py-3 font-semibold uppercase text-slate-800 dark:text-navy-100 lg:px-5">
                        Name
                        </th>
                        <th className="whitespace-nowrap px-3 py-3 font-semibold uppercase text-slate-800 dark:text-navy-100 lg:px-5">
                        Is Active
                        </th>
                        
                        <th className="whitespace-nowrap px-3 py-3 font-semibold uppercase text-slate-800 dark:text-navy-100 lg:px-5">
                        Created At
                        </th>
                        <th className="whitespace-nowrap px-3 py-3 font-semibold uppercase text-slate-800 dark:text-navy-100 lg:px-5">
                        Last Login
                        </th>
                        <th className="whitespace-nowrap px-3 py-3 font-semibold uppercase text-slate-800 dark:text-navy-100 lg:px-5"></th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user=>(
                                <tr className="border border-transparent border-b-slate-200 dark:border-b-navy-500" key={`user-${user.id}`}>                                    
                                    <td className="whitespace-nowrap px-4 py-3 sm:px-5"><Link href={`/users/${user.id}`} className="text-orange-500">{user.email}</Link></td>
                                    <td className="whitespace-nowrap px-4 py-3 sm:px-5">{user.name}</td>
                                    <td className="whitespace-nowrap px-4 py-3 sm:px-5">{user.is_active ? 'Si' : 'No'}</td>                                    
                                    <td className="whitespace-nowrap px-4 py-3 sm:px-5">{user.created_at}</td>
                                    <td className="whitespace-nowrap px-4 py-3 sm:px-5">{user.last_login}</td>
                                    <td className="whitespace-nowrap px-4 py-3 sm:px-5"><DeleteButton user={user} /></td>                                    
                                </tr>
                            ))
                        }                                            
                    </tbody>
                </table>
            </div>
        </>

    )
}