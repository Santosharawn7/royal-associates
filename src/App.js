import React from "react";
import Hero from "./Components/Hero";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import AboutUs from "./Components/AboutUs";
import Licensess from "./Components/License";
import Team from "./Components/Team";
import TeamHero from "./Components/TeamHero";
import Announcements from "./Components/Announcements";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import  Navbar  from "./Components/Navbar";
import Home from "./Components/Home";
import Smallclaims from "./Components/Smallclaims";
import Landlordtenant from "./Components/LandlordTenant";
import OccupationalHealth from "./Components/OccupationHealth";
import ProcessServing from "./Components/ProcessServing";
import EmploymentLaw from "./Components/EmploymentLaw";
import WSIB from "./Components/Wsib";

function App() {
  return (
    
    <div>
       <Router>
       <header class="sticky top-0 z-50">

        <Navbar/>
        </header>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contact" element={<Contact />}/>
                <Route path="/announcements" element={<Announcements />} />
                <Route path="/team" element={<Team />} />
                <Route path="/small-claims" element={<Smallclaims />} />
                <Route path="/landlord-&-tenants" element={<Landlordtenant />} />
                <Route path="/occupational-health" element={<OccupationalHealth />} />
                <Route path="/process-serving" element={<ProcessServing />} />
                <Route path="/employment-law" element={<EmploymentLaw />} />
                <Route path="/wsib" element={<WSIB />} />
            </Routes>
            <Contact/>
        </Router>
         {/* <header class="sticky top-0 z-50">

      <Navbar/>
      </header>
  
      <hr/>
      <AboutUs/>
      <Licensess/>
      <TeamHero/>
      <Team/>
      <Announcements/>
      <Contact/>
      <Footer/> */}
    </div>
  );
}

export default App;