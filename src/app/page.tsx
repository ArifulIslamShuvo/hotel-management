"use client";

import Banner from "@/components/home/Banner/Banner";
import Features from "@/components/home/Features/Features";
import Gallery from "@/components/home/Gallery/Gallery";
import AboutUs from "@/components/ui/AboutUs/AboutUs";
import PublicHeader from "@/components/view/Header/PublicHeader";

export default function Home() {
  return (
    <div>
      <PublicHeader />
      {/* <h1 className="text-l">This web application eLearning Platform</h1> */}
      <Banner />
      <AboutUs />
      <Features />
      <Gallery />
    </div>
  );
}
