import { BackButton, InputText, Switch , Button} from "../../Components"
import { useForm } from '@inertiajs/react'
import { User } from "../../../types"
import { useEffect } from "react"


export default ({
    user
}:{ user: User})=>{


    const defaultUser = {
        id: 0,
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        is_super_admin:  false,
        is_active: true,
    }
    
    const { data, setData, setDefaults, post, put, processing, errors } = useForm(defaultUser)
      
    function submit(e:any) {
      e.preventDefault()
      if(user){
        put(`/users/${user.id}`)
      }else{
        post('/users')
      }
      
    }

    useEffect(()=>{

        if(user){
            setData({
                id: user.id,
                name: user.name,
                email: user.email,
                password: '',
                password_confirmation: '',
                is_super_admin:  user.is_super_admin,
                is_active: user.is_active,
            })
        }else{
            setData(defaultUser)
        }

    },[user])

    return (
        <>
            <div className="flex items-center justify-between py-5 lg:py-6">
                <div className="flex items-center space-x-1">
                    <h2 className="text-xl font-medium text-slate-700 line-clamp-1 dark:text-navy-50 lg:text-2xl">
                    { user ? 'Editar Usuario' : 'Nuevo usuario'}
                    </h2>                
                </div>                
            </div>

            <div className="card p-4">
                <form onSubmit={submit}>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-5">
                        <InputText
                            label="Nombre"
                            value={data.name}
                            onChange={value => setData('name',value)}
                            error={errors.name}
                        />
                        <InputText
                            label="Usuario"
                            value={data.email}
                            onChange={value => setData('email',value)}
                            error={errors.email}
                        />
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2  mb-5">
                        <InputText
                            label="Contraseña"
                            value={data.password}
                            onChange={value => setData('password',value)}
                            error={errors.password}
                            type="password"
                        />
                        <InputText
                            label="Confirmación de contraseña"
                            value={data.password_confirmation}
                            onChange={value => setData('password_confirmation',value)}
                            error={errors.password_confirmation}
                            type="password"
                        />
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2  mb-5">
                        <Switch
                            label="Super Admin"
                            value={data.is_super_admin}
                            onChange={(value:boolean) => setData('is_super_admin',value)}
                            error={errors.is_super_admin}                        
                        />
                        <Switch
                            label="Esta activo"
                            value={data.is_active}
                            onChange={(value:boolean) => setData('is_active',value)}
                            error={errors.is_active}                        
                        />
                    </div>

                    <div className="flex justify-end space-x-3">                    
                        <BackButton />
                        <Button type="submit" loading={processing}>{!user ? 'Crear': 'Actualizar'}</Button>
                    </div>
                </form>
            </div>
        </>
        
    )
}