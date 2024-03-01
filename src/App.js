import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import AboutUs from "./Components/AboutUs";
import Licensess from "./Components/License";
import Team from "./Components/Team";
import TeamHero from "./Components/TeamHero";
import Announcements from "./Components/Announcements";
import { Router } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <hr/>
      <AboutUs/>
      <Licensess/>
      <TeamHero/>
      <Team/>
      <Announcements/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;