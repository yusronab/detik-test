import { Link } from "react-router-dom";

const RegisterBtn = () => {
    return (
        <Link to={'/register'} className="relative rounded px-5 py-2.5 overflow-hidden group
        bg-blue-500 relative hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400
        text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out
        duration-300">
            <span className="absolute right-0 w-20 h-32 -mt-12 transition-all duration-1000 transform
            translate-x-24 bg-white opacity-10 rotate-12 group-hover:-translate-x-40
            ease"></span>
            <span className="relative">Daftarkan startup kamu</span>
        </Link>
    );
}

export default RegisterBtn;