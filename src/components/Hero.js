import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className='h-screen w-screen relative'>
            <div className='bg-hero bg-cover absolute top-0 w-full h-full'></div>
            <div className='absolute top-0 w-full h-full bg-gradient-to-b from-blue-500'></div>
            <div className='absolute z-[2] left-1/2 top-1/2 -translate-x-1/2
            -translate-y-1/2 flex flex-col items-center text-white'>
                <p>Detikfinace Business Plan Competition 2023</p>
                <h2 className='text-4xl font-bold my-3'>EMPOWERING INDONESIA STARTUP</h2>
                <span className='text-center text-sm'>
                    Detikfinace memberikan ruang kepada para startup di Indonesia untuk
                    menunjukan, serta mempromosikan brand mereka untuk mendapatkan perhatian
                    dari venture capital atau angel investor.
                </span>
                <Link to={'/register'} className='btn bg-sky-500 text-white mt-3 py-2 px-5
                font-semibold rounded'>Daftarkan startup kamu</Link>
            </div>
            <div className='w-full absolute bottom-0'>
                <img
                    src='/bg-wave3.png'
                    alt=''
                    className='w-full h-[200px] bg-gradient-to-t from-sky-50'
                />
            </div>
            <div className='w-full absolute top-0 rotate-180'>
                <img
                    src='/bg-wave3.png'
                    alt=''
                    className='w-full h-[200px]'
                />
            </div>
        </div>
    );
}

export default Hero;