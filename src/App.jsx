
import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AIDataTable from "./components/AIDataTable";
import Footer from "./components/Footer";
import DownloadSection from "./components/DoenloadSection";
import FAQSection from "./components/Faq";

function App() {
  return (
   <>
       <div className="bg-dark min-h-screen">
      <Navbar />
      <HeroSection />
      <AIDataTable />
      <DownloadSection/>

      <FAQSection/>
      <Footer />
    </div>
   </>

  )
}

export default App
