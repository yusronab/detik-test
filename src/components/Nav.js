import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className='fixed w-screen flex justify-between bg-blue-500 px-8 py-1 z-20'>
            <Link to={'/'} className='flex flex-col text-white'>
                <span className='text-xs'>detikfinace</span>
                <h1 className='font-bold'>BUSINESS PLAN</h1>
                <span className='text-xs tracking-[1px]'>COMPETITION 2023</span>
            </Link>
            <div className='flex items-center gap-x-10 text-white font-semibold'>
                <a href="#about">About</a>
                <a href="#mechanism">Mechanism</a>
                <a href="#update">Latest Update</a>
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