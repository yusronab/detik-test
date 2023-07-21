import About from "../components/About";
import Hero from "../components/Hero";
import Mechanism from "../components/Mechanism";
import Venture from "../components/Venture";
import Update from "../components/Update";

const Home = () => {
    return(
        <div className='relative bg-sky-50'>
            <Hero />
            <About />
            <Mechanism />
            <Venture />
            <Update />
        </div>
    );
}

export default Home;