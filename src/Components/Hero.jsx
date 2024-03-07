import React, {useState} from "react";

const Hero = () => {

  return (


    <section class="relative md:py-36 font-serif overflow-hidden  bg-gray-700">
      <img class="xs:block absolute top-0 left-0 w-full h-full bg-opacity-45  md:object-top object-cover" src="./Assets/building.png" alt=""/>
      <div class="relative container px-4 mx-auto">
        <div class=" pt-24">
          <h1 class="font-heading text-4xl sm:text-6xl text-center  rounded-3xl p-4 text-white lg:text-8xl xl:text-10xl font-bold mb-12">
            <span>Royal Associates </span>
          </h1>
          <h3 class="font-headingtext-3xl text-center rounded-3xl  text-white lg:text-5xl xl:text-5xl font-semibold mb-12">
            <span>Legal Consulting </span>
          </h3>
          <div class="h-[300px] mx-auto w-fit">
          <img class="w-full h-full object-center rounded-lg" src="./Assets/RAsociate.svg" alt="wsib parade"/>
        </div>
          
        </div>
      </div>
    </section>
    )
}

export default Hero