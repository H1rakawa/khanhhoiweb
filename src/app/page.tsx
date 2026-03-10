import React from "react";
import Navbar from "@/com/Navbar";
import HeroSection from "@/com/home/HeroSection";
import OurStory from "@/com/home/OurStory";
import NewsEvent from "@/com/home/NewsEvent";
import BibleStudyCTA from "@/com/home/BibleStudyCTA";
import Footer from "@/com/Footer";

export default function page() {
  return (
    <div>
      <Navbar />

      <div className="pt-20">
        <HeroSection />

        <OurStory />

        <NewsEvent />

        <BibleStudyCTA />
      </div>

      <Footer />
    </div>
  );
}
