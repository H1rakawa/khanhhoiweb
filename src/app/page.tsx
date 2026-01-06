import Navbar from "../com/home/Navbar";
import Hero from "../com/home/Hero";
import PeaceSection from "../com/home/PeaceSection";
import NextSteps from "../com/home/NextSteps";
import MoreForYou from "../com/home/MoreForYou";
import NewToLife from "../com/home/NewToLife";
import BibleAppSection from "../com/home/BibleAppSection";
import Footer from "../com/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Navbar />

      <main className="grow">
        <Hero />

        <PeaceSection />

        <NextSteps />

        <MoreForYou />

        <NewToLife />

        <BibleAppSection />
      </main>

      <Footer />
    </div>
  );
}
