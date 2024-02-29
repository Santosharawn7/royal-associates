import React from "react";

const Contact = () => {


    return(
        
<section class="relative py-12 md:py-24 bg-teal-900 overflow-hidden">
  <div class="relative container px-4 mx-auto">
    <div class="absolute top-0 left-0 w-full h-full px-4">
      <div class="px-8 pt-96 bg-radial-dark-green rounded-3xl">
        <img class="block mx-auto" src="aurora-assets/contact/lines-background-green.png" alt=""/>
      </div>
    </div>
    <div class="relative px-10 py-16">
      <div class="max-w-lg mb-12 mx-auto text-center">
        <h1 class="font-heading tracking-tight text-4xl sm:text-5xl font-bold text-white mb-4">Get in touch with us for more information</h1>
        <p class="text-lg text-gray-400">If you need help or have a question, we&rsquo;re here for you</p>
      </div>
      <div class="max-w-xl mx-auto p-8 bg-teal-700 border border-gray-700 rounded-xl">
        <form action="">
          <div class="mb-4">
            <label class="block mb-1 text-sm font-medium text-white" for="">Name</label>
            <input class="py-2 px-4 h-11 w-full text-gray-500 placeholder-gray-500 bg-gray-800 border border-gray-700 focus:border-yellowGreen-800 rounded-md outline-none ring ring-transparent focus:ring-yellowGreen-800" type="text" placeholder="Your name"/>
          </div>
          <div class="mb-4">
            <label class="block mb-1 text-sm font-medium text-white" for="">Email</label>
            <input class="py-2 px-4 h-11 w-full text-gray-500 placeholder-gray-500 bg-gray-800 border border-gray-700 focus:border-yellowGreen-800 rounded-md outline-none ring ring-transparent focus:ring-yellowGreen-800" type="email" placeholder="john@email.com"/>
          </div>
          <div class="mb-4">
            <label class="block mb-1 text-sm font-medium text-white" for="">Subject</label>
            <div class="relative w-full bg-gray-800">
              <select class="relative z-10 py-2 px-4 h-11 w-full cursor-pointer bg-transparent text-gray-500 placeholder-gray-500 border border-gray-700 focus:border-yellowGreen-800 rounded-md outline-none ring ring-transparent focus:ring-yellowGreen-800 appearance-none" name="" id="">
                <option value="">Select subject</option>
                <option value="">Marketing</option>
                <option value="">Development</option>
              </select>
              <span class="absolute top-1/2 right-0 mr-3 transform -translate-y-1/2">
                <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 7.5L10 12.5L15 7.5" stroke="#9CABA2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </span>
            </div>
          </div>
          <div class="mb-8">
            <label class="block mb-1 text-sm font-medium text-white" for="">Message</label>
            <textarea class="block py-2 px-4 w-full h-32 text-gray-500 placeholder-gray-500 bg-gray-800 border border-gray-700 focus:border-yellowGreen-800 rounded-md outline-none ring ring-transparent focus:ring-yellowGreen-800 resize-none" placeholder="Enter your message"></textarea>
          </div>
          <button class="xs:flex-shrink-0 group relative flex w-full h-14 xs:inline-flex items-center justify-center px-4 p-px font-bold text-gray-900 bg-yellowGreen-600 rounded-lg transition-all duration-300 focus:outline-none" type="submit">
            <div class="absolute top-0 left-0 w-full h-full rounded-lg ring ring-yellowGreen-900 animate-pulse group-hover:ring-0 transition duration-300"></div>
            <span>Submit</span>
          </button>
        </form>
      </div>
    </div>
  </div>
</section>
    )
}

export default Contact