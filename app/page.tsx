import { CarouselWrapper } from "./Components/Carousel/Carousel";
import Navbar from "./Components/Navbar/Navbar";
import Services from "./Components/hizmetlerimiz/Services";
import AboutShort from "./Components/hakkimizda/AboutShort";
import About from "./Components/hakkimizda/About";
import References from "./Components/referanslar/References";
import Contact from "./Components/iletisim/Contact";
import Footer from "./Components/Footer";

export default function Home() {
    return (
        <main>
            <Navbar />
            <CarouselWrapper />
            <AboutShort/>
            <Services />
            <About />
            <References />
            <Contact />
            <Footer />
        </main>
    );
}
