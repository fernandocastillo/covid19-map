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

                <div className="mt-4 text-center text-xs+">
                    <p className="line-clamp-1">
                        <span>Dont have Account? </span>
                        <Link className="text-orange-500 transition-colors hover:text-orange-700 dark:text-accent-light dark:hover:text-accent" href="/register">Create account</Link>
                    </p>
                </div>
            </form>
        </>
    )
}

export default Login