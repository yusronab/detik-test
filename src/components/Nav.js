import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { RiCloseLine } from "react-icons/ri";

const Nav = () => {
    const [navOpen, setNavOpen] = useState(false);

    return (
        <nav className='fixed w-screen flex flex-wrap justify-between bg-blue-500 px-8 py-1 
        z-20 transition-all duration-300'>
            <div className='w-full flex justify-between lg:w-auto'>
                <Link to={'/'} className={`flex flex-col text-white lg:visible
                ${navOpen && 'invisible'}`}>
                    <span className='text-xs'>detikfinace</span>
                    <h1 className='font-bold'>BUSINESS PLAN</h1>
                    <span className='text-xs tracking-[1px]'>COMPETITION 2023</span>
                </Link>
                <button
                    type="button"
                    className='text-white px-3 py-1 border border-solid border-transparent
                    rounded lg:hidden'
                    onClick={() => setNavOpen(!navOpen)}
                >
                    {navOpen ? <RiCloseLine size={24} /> : <FaBars size={24} />}
                </button>
            </div>
            <div className={
                `lg:flex transition-all duration-300
                ${navOpen ? ' flex' : ' hidden'}`
            }>
                <div className='flex flex-col lg:flex-row md:gap-x-10 text-white
                font-semibold py-4 gap-y-2 lg:py-0 lg:gap-y-2 lg:items-center'>
                    <a
                        href="#about"
                        className='relative after:absolute after:bottom-0 after:left-0 
                        after:h-[2px] after:w-0 after:bg-white hover:after:w-full 
                        after:transition-all'
                    >
                        About
                    </a>
                    <a
                        href="#mechanism"
                        className='relative after:absolute after:bottom-0 after:left-0 
                        after:h-[2px] after:w-0 after:bg-white hover:after:w-full 
                        after:transition-all'
                    >
                        Mechanism
                    </a>
                    <a
                        href="#update"
                        className='relative after:absolute after:bottom-0 after:left-0 
                        after:h-[2px] after:w-0 after:bg-white hover:after:w-full 
                        after:transition-all'
                    >
                        Latest Update
                    </a>
                    <Link
                        to={'/register'}
                        className='bg-white px-[32px] py-2 rounded-full text-blue-500'
                    >
                        Register
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Nav;