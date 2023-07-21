import { Link } from "react-router-dom";

import VentureSlider from "./VentureSlider";

const Venture = () => {
    return (
        <div className='flex flex-col items-center py-16'>
            <p className='font-bold text-blue-500 max-w-md text-center'>
                Dapatkan Kesempatan Dilirik oleh Venture Capital / Angel Investor Serta
                Menjadi Narasumber di Detikfinance
            </p>
            <VentureSlider />
            <Link to={'/register'} className='btn bg-sky-500 text-white mt-3 py-2 px-5
                font-semibold rounded'>Daftarkan startup kamu</Link>
        </div>
    );
}

export default Venture;