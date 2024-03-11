import { useForm, Link } from '@inertiajs/react'
import { Text, Button, Checkbox } from '../Components'
import { UserIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const Login = () => {    
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
        remember: false,
    })
      
    function submit(e: any) {
        e.preventDefault()
        post('/login')
    }

    return (
        <>
            <form onSubmit={submit} className="card mt-5 rounded-lg p-5 lg:p-7 space-y-4">
                <Text 
                    label='Email'
                    value={data.email} 
                    onChange={e => setData('email', e.target.value)}
                    error={errors.email}
                    icon={<UserIcon className="h-5 w-5 transition-colors duration-200" />}
                    />

                <Text 
                    label='Password'
                    value={data.password} 
                    onChange={e => setData('password', e.target.value)}
                    error={errors.password}
                    icon={<LockClosedIcon className="h-5 w-5 transition-colors duration-200" />}
                    type="password"
                    />
                
                <div className=" flex items-center justify-between space-x-2">
                    <Checkbox checked={data.remember} onChange={()=>setData('remember', !data.remember)} >
                        Remember me
                    </Checkbox>                                        
                </div>

                <Button 
                    type="submit"
                    loading={processing}
                    >
                    Login
                </Button>              
            </form>
        </>
    )
}

export default Login