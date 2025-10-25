import React, { useEffect, useState } from "react";
import Hero from "../components/LandingPage/Hero";
import BestSellers from "../components/LandingPage/BestSellers";
import Essentials from "../components/LandingPage/Essentials";
import About from "../components/LandingPage/About";
import Collection from "../components/LandingPage/Collection";
import Loading from "../components/common/Loading";
import Contact from "../components/LandingPage/Contact";
import WhyLoveUs from "../components/LandingPage/WhyLoveUs";
import NewsPage from "../components/LandingPage/NewsPage";
import Footer from "../components/LandingPage/Footer";
import PartnerContact from "../components/LandingPage/PartnerContact";

export default function LandingPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <main>
      <Hero />
      <BestSellers />
      <Essentials />
      <About />
      <Collection />
      <Contact />
      <WhyLoveUs />
      <NewsPage/>
      <Footer/>
    
    </main>
  );
}
