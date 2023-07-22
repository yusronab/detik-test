import RegisterBtn from "./RegisterBtn";

const Hero = () => {
    return (
        <div className='h-screen w-screen relative'>
            <div className='bg-hero bg-cover absolute top-0 w-full h-full'></div>
            <div className='absolute top-0 w-full h-full bg-gradient-to-b from-blue-500'></div>
            <div className='absolute z-[2] left-1/2 top-1/2 -translate-x-1/2
            -translate-y-1/2 flex flex-col items-center text-white'>
                <p className="text-center">Detikfinace Business Plan Competition 2023</p>
                <h2 className='text-3xl md:text-4xl text-center font-bold my-3'>
                    EMPOWERING INDONESIA STARTUP
                </h2>
                <span className='text-center text-sm mb-4'>
                    Detikfinace memberikan ruang kepada para startup di Indonesia untuk
                    menunjukan, serta mempromosikan brand mereka untuk mendapatkan perhatian
                    dari venture capital atau angel investor.
                </span>
                <RegisterBtn />
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