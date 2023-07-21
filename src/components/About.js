import ReactPlayer from "react-player";

import {
    RiTwitterLine,
    RiWhatsappLine,
    RiFacebookCircleLine,
} from 'react-icons/ri';

const About = () => {
    return (
        <div className='flex flex-col lg:flex-row gap-x-8 p-[10%]'>
            <div className='w-[400px] lg:w-[35vw] h-[200px] mx-auto'>
                <ReactPlayer
                    url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                    width="100%"
                    height="100%"
                    light='https://source.unsplash.com/random/900×700/?presenter'
                    controls
                />
            </div>
            <div className='mt-3 lg:mt-0 lg:max-w-[60%] flex lg:items-start flex-col
            items-center'>
                <h2 className='text-2xl font-bold text-blue-500'>
                    About Detikfinace Business Plan Competition 2023
                </h2>
                <p className='my-3 text-center lg:text-start'>
                    Detikfinace kali ini memberikan ruang bagi startup untuk networking dan
                    memamerkan produk inovasinya dihadapa venture capital dan angel investor.
                    Acara ini juga akan menghadirkan para pengembang teknologo dan pelaku bisnis
                    untuk memberikan edukasi dan inspirasi bagi masyarakat Indonesia dan
                    teknofilia mengenai perkembangan teknologi di Indonesia.
                </p>
                <div className='flex text-blue-500 gap-x-4 items-center'>
                    <p>Share</p>
                    <RiTwitterLine size={24} />
                    <RiWhatsappLine size={24} />
                    <RiFacebookCircleLine size={24} />
                </div>
            </div>
        </div>
    );
}

export default About;