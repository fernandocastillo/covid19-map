import { useForm, Link } from '@inertiajs/react'
import { Text, Button } from '../Components'
import { UserIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const Login = () => {    
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        remember: false,
    })
      
    function submit(e: any) {
        e.preventDefault()
        post('/register')
    }

    return (
        <>
            

            <form onSubmit={submit} className="card mt-5 rounded-lg p-5 lg:p-7 space-y-4">

                <p className="text-slate-400 dark:text-navy-300 text-center">Please sign up to continue</p>

                <Text 
                    label='Name'
                    value={data.name} 
                    onChange={e => setData('name', e.target.value)}
                    error={errors.name}
                    icon={<UserIcon className="h-5 w-5 transition-colors duration-200" />}
                    />

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

                <Text 
                    label='Repeat Password'
                    value={data.password_confirmation} 
                    onChange={e => setData('password_confirmation', e.target.value)}
                    error={errors.password_confirmation}
                    icon={<LockClosedIcon className="h-5 w-5 transition-colors duration-200" />}
                    type="password"
                    />
                
                

                <Button 
                    type="submit"
                    loading={processing}
                    >
                    Sign up
                </Button>

                <div className="mt-4 text-center text-xs+">
                    <p className="line-clamp-1">
                        <span>Already have Account? </span>
                        <Link className="text-orange-500 transition-colors hover:text-orange-700 dark:text-accent-light dark:hover:text-accent" href="/">Sign in</Link>
                    </p>
                </div>
            </form>
        </>
    )
}

export default Login