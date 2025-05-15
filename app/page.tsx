import Navbar from "./components/NavBar";
import TestSection from "./components/TestSection";
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
      <TestSection />
      <AppScreenshots />
      <Contact />
      <Footer />
    </main>
  );
}
//------------------

// "use client";

// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import DownloadSection from "./components/DownloadSection";
// import Introduction from "./components/Introduction";
// import AppScreenshots from "./components/AppScreenshots";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";

// export default function Home() {
//   return (
//     <>
//       <Navbar />
//       <main className="pt-40 p-6 max-w-7xl mx-auto bg-white text-gray-800">
//         <Hero />
//         <DownloadSection />
//         <Introduction />
//         <AppScreenshots />
//         <Contact />
//         <Footer />
//       </main>
//
//     </>
//   );
// }
