import React from "react";

const Announcements = () => {
    return (  
<section class="py-20">
    <div className="text-center mb-10 bg-gray-300 py-20 font-serif">
        <h1 class="font-medium font-heading text-gray-700 text-4xl md:text-6xl xl:text-7xl mb-5">Recent News</h1>
        <p className="text-gray-500 text-base">Stay up to date with the most recent industry news and relevant legal cases.</p>
    </div>   
  <div class="container font-serif px-4 mx-auto">
    <div class="flex flex-wrap items-center -mx-4 mb-16">
      <div class="w-full lg:w-2/5 px-4">
        <div class="text-left">
          <h2 class="mb-4 text-4xl font-heading">WSIB holds average premium rate for Ontario businesses at lowest level in more than 20 years</h2>
          <span class="inline-block mb-6 text-base text-gray-500">New incentives will help businesses invest in safety.</span>
          <span class="inline-block mb-6 text-base text-gray-500">The Workplace Safety and Insurance Board (WSIB) announced today that the average premium rate for Ontario businesses will <a className="underline" target="_blank" href="https://www.wsib.ca/en/2023premiumrates">remain steady for 2023</a> at $1.30 for every $100 of insurable payroll.</span>
          <p class="inline-block mb-6 text-base text-gray-500">“We are doing our part to support Ontario businesses as they recover from the pandemic while improving outcomes for people who have been injured to have a safe, timely and lasting return to work,” said Jeffery Lang, WSIB President and CEO. “I am very proud that we are able to hold premium rates to a 20-year low.”</p>
          <span class="inline-block mb-6 text-base text-gray-500">The whole article can be found <a className="underline" target="_blank" href="https://www.wsib.ca/en/news-release/wsib-holds-average-premium-rate-ontario-businesses-lowest-level-more-20-years">here.</a></span>
        </div>
      </div>
      <div class="order-first lg:order-last w-full lg:w-3/5 px-4 mb-8 lg:mb-0">
        <div class="h-96">
          <img class="w-full h-full object-cover rounded-lg" src="./Assets/parade.jpg" alt="wsib parade"/>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap items-center -mx-4 mb-16">
      <div class="w-full lg:w-3/5 px-4 mb-8 lg:mb-0">
        <div class="h-96">
          <img class="w-full h-full object-cover rounded-lg" src="./Assets/construction.png" alt="construction"/>
        </div>
      </div>
      <div class="w-full lg:w-2/5 px-4">
        <div class="lg:pl-10 text-left">
          <h2 class="mb-4 text-4xl font-heading">Tribunals Ontario Statement on Ombudsman Ontario’s Investigation into Delays at the Landlord and Tenant Board</h2>
          <p class="text-base mb-6  text-gray-500">Sean Weir, Executive Chair of Tribunals Ontario, and Harry Gousopoulos, Executive Director of Tribunals Ontario, issued the following statement in response to the Ombudsman’s Office Investigative Report into delays and case backlogs at the Landlord and Tenant Board (LTB) released on May 4, 2023:</p>
          <p class="text-base mb-6  text-gray-500">“Today, the Ombudsman’s Office released its investigative report about service delays and challenges at the LTB"</p>
          <span class="text-base text-gray-500">The whole article can be found <a class="underline" target="_blank" href="https://tribunalsontario.ca/en/latest-news/">here.</a></span>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap items-center -mx-4 mb-16">
      <div class="w-full lg:w-2/5 px-4">
        <div class="text-left">
          <h2 class="mb-4 text-4xl font-heading">Ontario education workers face 'shockingly high' rates of workplace violence, new report says</h2>
          <p class="text-base mb-6 text-gray-500">Ontario education workers face "shockingly high" rates of workplace violence, with 70 per cent of those surveyed saying they have been subjected to some form of physical force, a new report says</p>
          <p class="text-base mb-6 text-gray-500">The report, In Harm's Way, The Epidemic of Violence Against Education Sector Workers in Ontario, by University of Ottawa researchers, says workplace violence against education workers is being normalized.</p>
          <span class="inline-block mb-6 text-base text-gray-500">The whole article can be found <a class="underline" target="_blank" href="https://www.cbc.ca/news/canada/toronto/violence-education-workers-ontario-shockingly-high-report-university-of-ottawa-1.6243456">here.</a></span>
        </div>
      </div>
      <div class="order-first lg:order-last w-full lg:w-3/5 px-4 mb-8 lg:mb-0">
        <div class="h-96">
          <img class="w-full h-full object-cover rounded-lg" src="./Assets/education.png" alt="education"/>
        </div>
      </div>
    </div>
  </div>
</section> 
    );
}


export default Announcements;