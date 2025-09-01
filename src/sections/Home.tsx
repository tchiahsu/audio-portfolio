import Header from "../sections/Header";
import Work from "../sections/Work";
import About from "../sections/About";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";

const Home = () => {

    return (
        <section className="relative">
            <Header />
            <Work />
            <About />
            <Contact />
            <Footer />
        </section>
    )
}

export default Home;