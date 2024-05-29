import React from "react";
import TeamHero from "./TeamHero";

const Team = () => {
    return (
        
<section>
<TeamHero/>

  <div class="py-2 bg-gray-50 radius-for-skewed">
    <div class="container mx-auto px-4">
      <div class="mb-8 flex flex-wrap rounded-lg shadow overflow-hidden">
        <div class="w-full lg:w-1/2 rounded-l">
          <img class="object-cover" src="./Assets/Jon.jpg" alt=""/>
        </div>
        <div class="w-full lg:w-1/2 py-6 lg:pt-10 px-6 rounded-r bg-white">
          
        <h2 class="mb-2 text-3xl md:text-5xl text-center md:text-left font-serif font-semibold font-heading">Jonathan Ekubor</h2>
        <h3 class="mb-10 text-2xl md:text-3xl text-center md:text-left font-serif text-yellow-700 font-bold font-heading">Paralegal</h3>
            <p class="mb-3 md:mb-4 md:text-xl font-serif text-justify text-gray-500">Jonathan is the managing paralegal and founder of our firm.  Before becoming a business owner, he helped make workspaces safer by mitigating workers compensation claim costs  and premiums for businesses as a Workers Compensation Specialist. As a Consultant, he also supported businesses deal with employment matters related to human resources, labour relations, occupational health and safety, and human rights.</p>
            <p class="mb-3 md:mb-10 md:text-xl font-serif text-justify text-gray-500">Prior to this, he grew up in the East York area of Toronto before obtaining a law clerk, and paralegal diploma from Seneca College, and completed a Bachelor of Arts with Honours in Law & Society at York University.</p>
        </div>
      </div>
      <div class="mb-8 flex flex-wrap rounded-lg shadow overflow-hidden">
        <div class="w-full lg:w-1/2 py-6 lg:pt-10 px-6 rounded-r bg-white order-1 lg:order-0">
        <h2 class="mb-2 text-3xl md:text-5xl text-center md:text-left font-serif font-semibold font-heading">Tanya Amaral</h2>
            <h3 class="mb-10 text-2xl md:text-3xl text-center md:text-left font-serif text-yellow-700 font-bold font-heading">Project Manager</h3>
            <p class="mb-4 md:text-xl font-serif text-justify text-gray-500">Tanya is the Project Manager of our firm. Prior to her role at Royal Associates, she managed a successful small business. She developed, coordinated, and enforced systems, policies, and productivity standards in order to adhere to health and safety regulations. Her background in business management are vital to helping you with your business needs.</p>
            <p class="mb-10 md:text-xl font-serif text-justify text-gray-500">Tanya grew up in the area of North York, Toronto. She obtained a Bachelor of Science with Honours in Psychology from York University.</p>
        </div>
        <div class="w-full lg:w-1/2 rounded-l order-0 lg:order-1">
          <img class="object-cover w-cover" src="./Assets/Tanya.jpg" alt=""/>
        </div>
      </div>
   
    </div>
  </div>

</section>

    );
}

export default Team;