import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Autoplay } from 'swiper/modules';

export const venturesData = [
    '/brand1.png',
    '/brand2.png',
    '/brand3.jpeg',
    '/brand4.png',
    '/brand5.png',
    '/brand6.png',
    '/brand7.svg',
    '/brand8.png',
];

const VentureSlider = () => {
    return (
        <div className='w-full my-5'>
            <Swiper
                freeMode={true}
                loop={true}
                autoplay={{ delay: 1500 }}
                breakpoints={{
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    960: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                    },
                }}
                modules={[FreeMode, Autoplay]}
            >
                {venturesData.map((item, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={item}
                            alt=''
                            className='w-[300px] h-[150px] object-contain p-3 rounded bg-white'
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default VentureSlider;