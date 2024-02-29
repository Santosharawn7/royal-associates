import React, {useState} from "react";

const Hero = () => {

    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
    return (
        
<section class="relative bg-teal-900 pb-24">
  <nav class="relative bg-teal-900">
    <div class="container sticky top-0 mx-auto px-4">
      <div class="relative flex h-24 items-center">
        <a class="inline-block" href="#">
          <img class="h-10" src="/logo192.png" alt=""/>
        </a>
        <button class="md:hidden navbar-burger flex items-center justify-center h-10 w-10 ml-auto border border-teal-900 bg-teal-200 bg-opacity-30 hover:bg-teal-700 rounded-lg">
          <svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 5H21" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M3 12H21" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M3 19H21" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </button>
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden lg:flex items-center">
          <a class="inline-block text-white hover:text-teal-400 mr-10" href="#">
            <div class="flex items-center">
              <span class="mr-3">Product</span>
              <svg width="10" height="6" viewbox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </div>
          </a>
          <a class="inline-block text-white hover:text-teal-400 mr-10" href="#">Features</a><a class="inline-block text-white hover:text-teal-400 mr-10" href="#">Pricing</a><a class="inline-block text-white hover:text-teal-400" href="#">Resources</a>
        </div>
        <div class="hidden lg:block ml-auto">
          <a class="inline-flex items-center justify-center h-10 mr-4 px-4 text-center text-sm text-white hover:text-teal-400 font-semibold transition duration-200" href="#">Login</a>
          <a class="group inline-block justify-center p-1 text-center text-sm text-white font-semibold rounded-lg" href="#">
            <div class="inline-flex items-stretch h-10 p-0.5 rounded-lg bg-gradient-to-b from-white via-gray-200 to-gray-300 hover:to-gray-700">
              <div class="flex items-center px-4 bg-white group-hover:bg-opacity-40 rounded-md transition duration-300">
                <span>Get Started</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </nav>
  <div class="container px-4 mx-auto">
    <div class="relative py-16 pb-20 xs:pb-40 md:pb-72 px-2 xs:px-8 bg-teal-800 rounded-3xl overflow-hidden">
      <div class="relative max-w-lg lg:max-w-3xl mb-14 mx-auto text-center">
        <div class="max-w-md md:max-w-2xl px-4 mx-auto">
          <h1 class="font-heading tracking-tight text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Your marketing assets, at your fingertips.</h1>
          <p class="max-w-lg mx-auto text-lg text-gray-300 mb-10">Empowers marketing team to easily store, organize, and access valuable assets from anywhere.</p>
          <a class="group relative flex xs:inline-flex items-center justify-center h-12 px-5 text-center text-base text-teal-800 font-bold bg-white rounded-lg transition duration-300" href="#">
            <div class="absolute top-0 left-0 w-full h-full rounded-lg ring ring-teal-600 animate-pulse group-hover:ring-0 transition duration-300"></div>
            <span>Get Started</span>
          </a>
        </div>
      </div>
    </div>
    <img class="relative block mx-auto px-12 lg:px-8 -mt-20 xs:-mt-40 md:-mt-64" src="aurora-assets/headers/header-2-center.png" alt=""/>
  </div>
  <div class="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-md z-50">
    <div class="navbar-backdrop fixed inset-0 bg-teal-800 opacity-70"></div>
    <nav class="relative flex flex-col py-6 px-10 w-full h-full bg-white overflow-y-auto">
      <div class="flex mb-auto items-center">
        <a class="inline-block mr-auto" href="#">
          <img class="h-10" src="/logo192.png" alt=""/>
        </a>
        <a class="navbar-close" href="#">
          <svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 18L18 6M6 6L18 18" stroke="#111827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </a>
      </div>
      <div class="py-12 mb-auto">
        <ul class="flex-col">
          <li class="mb-6"><a class="inline-block text-black" href="#">Product</a></li>
          <li class="mb-6"><a class="inline-block text-black" href="#">Features</a></li>
          <li class="mb-6"><a class="inline-block text-black" href="#">Pricing</a></li>
          <li><a class="inline-block text-black" href="#">Resources</a></li>
        </ul>
      </div>
      <div><a class="flex items-center justify-center h-12 mb-4 px-4 text-center text-base text-gray-700 font-semibold border border-gray-200 hover:bg-gray-100 shadow-lg rounded-lg transition duration-200" href="#">Login</a><a class="flex items-center justify-center h-12 px-4 text-center text-base text-white font-semibold bg-gradient-to-b from-cyanGreen-800 to-cyan-800 rounded-lg transition duration-200" href="#">Get Started</a></div>
    </nav>
  </div>
</section>
    )
}

export default Hero