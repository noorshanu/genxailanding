
import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AIDataTable from "./components/AIDataTable";
import Footer from "./components/Footer";

function App() {
  return (
   <>
       <div className="bg-dark min-h-screen">
      <Navbar />
      <HeroSection />
      <AIDataTable />
      <Footer />
    </div>
   </>

  )
}

export default App
