
import Sidebar from './Components/Sidebar'
import Preloader from './Components/Preloader'
import HeaderWrapper from './Components/HeaderWrapper'
import { useSelector } from "react-redux";
import { RootState } from '../../store';
import Confirm from '../Components/Confirm';
import Message from './Components/Message';

const Auth = ({children} : { children: any}) => {    
    
    const { sidebar_open=false } = useSelector((state: RootState)=> state.layout)
    
    return (        
        <div className={`${sidebar_open ? 'is-sidebar-open is-header-blur' : ''}`}>
            <Preloader />
            <Confirm />
            <div className='min-h-100vh flex grow bg-slate-100 dark:bg-navy-900'>
                <Sidebar />
                <HeaderWrapper />
                


                <main className="main-content w-full px-[var(--margin-x)] pb-8">
                    <Message />
                    {/*<div className='flex items-center space-x-4 py-5 lg:py-6'>*/}
                        {children}
                    {/*</div>*/}
                </main>
                                
            </div>        
        </div>
    )
}

export default Auth