import React from "react";
import AboutUs from "./AboutUs";
import Licensess from "./License";
import Ourservices from "./OurServices";
import Hero from "./Hero";

const Home = () => {
    return (      
<div>
    <Hero/>
    <AboutUs/>
    <Ourservices/>
    <Licensess/>
</div>
    );
}

export default Home;