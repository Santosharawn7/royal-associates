import React from "react";

const AboutUs = () => {
    return (      
<section class="m-20 grid grid-cols-1 md:grid-cols-2 gap-4">
  <div class="container">
    <div class="columns">
      <div class="column is-12-tablet is-6-desktop">
        <div class="has-mw-lg mb-12 mb-0-desktop">
          <h1 class="text-5xl font-serif text-gray-700 mt-8 mb-10 title lg:text-7xl is-2">About Us</h1>
          <div class="is-flex is-align-items-center">
          <div class="section pb-0 mt-24-desktop">
    <div class="has-mw-2xl text-justify mx-auto">
      <p class="mb-8 font-serif text-gray-500 lg:text-2xl is-size-5 has-text-grey-dark">Royal Associates brings over <span className="font-bold">8 years</span> of experience in consulting, advocating, and representing clients in matters relating to employment, residential tenancies, and small claims.</p>
      <p class="mb-8 font-serif text-gray-500 lg:text-2xl is-size-5 has-text-grey-dark">We have also partnered with businesses through providing support with workplace injury claims, and the management of disability in the workplace. Industries we have serviced include health care, hospitality, environmental services, retail, production, aviation, and manufacturing industries.</p>
      <p class="font-bold font-serif text-gray-500 mb-8 lg:text-2xl is-size-5 has-text-grey-dark">Our mission is to serve you!</p>
    </div>
    </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="is-hidden-desktop">
    <img class="image is-rounded w-full px-6 md:mt-20" src="./Assets/work work.jpg" alt="Work"/>
  </div>
</section>
    );
}

export default AboutUs;