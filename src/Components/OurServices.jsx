import React from "react";


const Ourservices = () => {
    return (      
       
<section class="py-20 bg-gray-300 xl:pt-24 text-center bg-coolGray-50" >
  <div class="container  px-4 mx-auto">
    <h1 class="mb-8 text-center font-serif font-bold text-5xl pb-8 leading-6 text-gray-700">Our Services</h1>
    
    <div class="flex flex-wrap justify-center -mx-4">
        
      <a class="w-auto md:w-1/3 lg:w-1/5 px-4 mb-8 lg:mb-0" href="/small-claims">
        <div class="flex items-center justify-center hover:scale-110 transition duration-300 ease-in-out bg-white  rounded-lg shadow-slate-950 shadow-lg overflow-hidden">
          <img class="object-contain w-[260px] h-[260px] flex flex-row p-5" src="./Assets/money.png" alt=""/>
        </div>
        <p class="font-bold pt-4 font-serif text-gray-500 mb-8 lg:text-2xl is-size-5 has-text-grey-dark">Small Claims</p>

      </a>
      <a class="w-auto md:w-1/3 lg:w-1/5 px-4 mb-8 lg:mb-0" href="/employment-law">
        <div class="flex items-center justify-center hover:scale-110 transition duration-300 ease-in-out bg-white  rounded-lg shadow-slate-950 shadow-lg overflow-hidden">
          <img class="object-contain w-[260px] h-[260px] p-5 flex flex-row" src="./Assets/hammer.png" alt=""/>
        </div>
        <p class="font-bold pt-4 font-serif text-gray-500 mb-8 lg:text-2xl is-size-5 has-text-grey-dark">Employment Law</p>

      </a>
      <a class="w-auto md:w-1/3 lg:w-1/5 px-4 mb-8 lg:mb-0" href="/landlord-&-tenants">
        <div class="flex items-center justify-center hover:scale-110 transition duration-300 ease-in-out bg-white  rounded-lg shadow-slate-950 shadow-lg overflow-hidden">
          <img class="object-contain w-[260px] h-[260px] flex flex-row p-5" src="./Assets/Home.png" alt=""/>
        </div>
        <p class="font-bold pt-4 font-serif text-gray-500 mb-8 lg:text-2xl is-size-5 has-text-grey-dark">Landlord & Tenant</p>

      </a>
      <a class="w-auto md:w-1/3 lg:w-1/5 px-4 mb-8 md:mb-0" href="/occupational-health">
        <div class="flex items-center justify-center hover:scale-110 transition duration-300 ease-in-out bg-white  rounded-lg shadow-slate-950 shadow-lg overflow-hidden">
          <img class="object-contain w-[260px] h-[260px] flex flex-row p-5" src="./Assets/services.png" alt=""/>
        </div>
        <p class="font-bold pt-4 font-serif text-gray-500 mb-8 lg:text-2xl is-size-5 has-text-grey-dark">WSIB/<br></br>Occupational <br></br>Health & Safety</p>

      </a>
      <a class="w-2/3 md:w-1/3 lg:w-1/5 px-4" href="/process-serving">
        <div class="flex items-center justify-center hover:scale-110 transition duration-300 ease-in-out bg-white  rounded-lg shadow-slate-950 shadow-lg overflow-hidden">
          <img class="object-contain w-[260px] h-[260px] flex flex-row p-5" src="./Assets/page.png" alt=""/>
        </div>
        <p class="font-bold pt-4 font-serif text-gray-500 mb-8 lg:text-2xl is-size-5 has-text-grey-dark">Notary Public, Process Serving, & Process Filing</p>

      </a>
    </div>
  </div>
</section>
    );
}

export default Ourservices;