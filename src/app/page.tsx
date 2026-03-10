import React from "react";
import Navbar from "@/com/Navbar";
import HeroSection from "@/com/HeroSection";
import OurStory from "@/com/OurStory";
import NewsEvent from "@/com/NewsEvent";
import BibleStudyCTA from "@/com/BibleStudyCTA";
import Footer from "@/com/Footer";

export default function page() {
  return (
    <div>
      <Navbar />

      <HeroSection />

      <OurStory />

      <NewsEvent />

      <BibleStudyCTA />

      <Footer />
    </div>
  );
}
