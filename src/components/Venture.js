import RegisterBtn from "./RegisterBtn";
import VentureSlider from "./VentureSlider";

const Venture = () => {
    return (
        <div className='flex flex-col items-center py-16'>
            <p className='font-bold text-blue-500 max-w-md text-center'>
                Dapatkan Kesempatan Dilirik oleh Venture Capital / Angel Investor Serta
                Menjadi Narasumber di Detikfinance
            </p>
            <VentureSlider />
            <RegisterBtn />
        </div>
    );
}

export default Venture;