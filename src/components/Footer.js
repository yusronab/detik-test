import {
    RiTwitterLine,
    RiInstagramLine,
    RiFacebookCircleLine,
} from 'react-icons/ri';

const Footer = () => {
    return (
        <div className='bg-blue-500 text-white p-6'>
            <p className='font-bold'>detikfinance</p>
            <h2 className='text-2xl font-extrabold'>BUSINESS PLAN</h2>
            <span className='tracking-[2px]'>COMPETITION 2023</span>
            <div className='flex justify-between flex-col md:flex-row mt-6 md:items-end'>
                <p className='max-w-[65%]'>
                    Detikfinance memberikan ruang kepada para startup di Indonesia untuk
                    menunjukan serta mempromosikan brand mereka untuk mendapatkan perhatian dari
                    venture capital atau angel investor
                </p>
                <div className='flex text-[24px] gap-x-4 mt-3 mb-2'>
                    <RiTwitterLine />
                    <RiInstagramLine />
                    <RiFacebookCircleLine />
                </div>
            </div>
            <hr className='w-full h-[1px] bg-white my-2' />
            <p>&copy; 2023 Detikcom All right reserved</p>
        </div>
    );
}

export default Footer;