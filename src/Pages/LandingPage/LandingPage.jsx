import CTA from "../../components/CTA/CTA"
import Features from "../../components/Features/Features"
import Footer from "../../components/Footer/Footer"
import HeroSection from "../../components/Herosection/Herosection"
import Navbar from "../../components/Navbar/Navbar"
import Process from "../../components/Process/Process"
import Restaurants from "../../components/Restaurants/Restaurants"
import Testimonials from "../../components/Testimonials/Testimonials"


function LandingPage() {

  return (
    <>
    <Navbar />
    <HeroSection />
    <Features />
    <Restaurants />
    <Process />
    <Testimonials />
    <CTA />
    <Footer />
    </>
  )
}

export default LandingPage;
