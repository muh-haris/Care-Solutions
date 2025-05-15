import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import AppScreenshots from "./components/AppScreenshots";
import DownloadSection from "./components/DownloadSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-white text-gray-800">
      <Navbar />
      <Hero />
      <DownloadSection />
      <Introduction />
      <AppScreenshots />
      <Contact />
      <Footer />
    </main>
  );
}
