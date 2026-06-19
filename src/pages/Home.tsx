import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Services from '../components/Services';
import FeaturedOffer from '../components/FeaturedOffer';
import WhoWeHelp from '../components/WhoWeHelp';
import WhyChooseUs from '../components/WhyChooseUs';
import SeeOurWork from '../components/SeeOurWork';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Intro />
      <Services />
      <FeaturedOffer />
      <WhoWeHelp />
      <WhyChooseUs />
      <SeeOurWork />
      <Contact />
      <Footer />
    </>
  );
}
