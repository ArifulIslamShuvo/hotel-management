"use client";

import Banner from "@/components/home/Banner/Banner";
import Features from "@/components/home/Features/Features";
import Gallery from "@/components/home/Gallery/Gallery";
import AboutUs from "@/components/ui/AboutUs/AboutUs";
import Footer from "@/components/ui/Footer/Footer"; 
import Welcome from "@/components/ui/Welcome/Welcome";
import PublicHeader from "@/components/view/Header/PublicHeader";
import BannerCard from '../components/ui/Bannercard/Bannercard';

export default function Home() {
  
  return (
    <div>
      <PublicHeader />
      <Banner/>
      <BannerCard />
      <Welcome />
      <Features />
      <AboutUs />
      <Gallery />
      <Footer />
    </div>
  );
}
