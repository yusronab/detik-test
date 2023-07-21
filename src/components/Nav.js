import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className='fixed w-screen flex justify-between bg-blue-500 px-8 py-1 z-10'>
            <Link to={'/'} className='flex flex-col text-white'>
                <span className='text-xs'>detikfinace</span>
                <h1 className='font-bold'>BUSINESS PLAN</h1>
                <span className='text-xs tracking-[1px]'>COMPETITION 2023</span>
            </Link>
            <div className='flex items-center gap-x-10 text-white font-semibold'>
                <Link to={'#about'}>About</Link>
                <Link to={'#mechanism'}>Mechanism</Link>
                <Link to={'#update'}>Latest Update</Link>
                <Link
                    to={'/register'}
                    className='bg-white px-[32px] py-2 rounded-full text-blue-500'
                >
                    Register
                </Link>
            </div>
        </nav>
    );
}

export default Nav;