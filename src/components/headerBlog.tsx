import Link from 'next/link';
import AuthService from '../auth/service/authService'
import NavUserInfo from './InfoUser';
import { ModeToggle } from './toggleTheme';
import { NavigationOffSession } from './navigateOffSession';

export default async function HeaderBlog(){
    const session = await AuthService.isSessionValid()

    return(
        <div className='w-[100%] bg-accent fixed top-0 z-50' >
            <div className='w-[80%] mx-auto' >
                <div className='flex justify-between items-center gap-4 p-4'>
                <Link className="flex items-center p-2 text-base font-normal rounded-lg" href="/blog">Blog GeisaBitt</Link>
                    <div className="flex items-center gap-4">
                        <Link className="flex items-center p-2 text-base font-normal rounded-lg hover:bg-popover" href="/blog">Blog</Link>
                        <Link className="flex items-center p-2 text-base font-normal rounded-lg hover:bg-popover" href="/pagamento">Pay</Link>

                        {session? <NavUserInfo/>: <NavigationOffSession/> }
                    {/* <form className='flex gap-2 items-center' action="" id="search"><Input/><FaSearch className='-m-10' /></form> */}
                    <ModeToggle/>
                </div>
            </div>
        </div>
    </div>
    )
}