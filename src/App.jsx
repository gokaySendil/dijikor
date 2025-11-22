import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Hero from "./Hero";
import Hakkimizda from "./Hakkimizda";
import InfoSection from "./InfoSection";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CardSection from "./CardSection";
import Partners from "./Partners";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/Hakkimizda" element={<Hakkimizda />} />
      </Routes>
      <Hero />
      <InfoSection />
      <CardSection/>
      <Partners/>
      <Footer />
    </div>
  );
}

export default App;
