import { useState } from "react";
import {
  PaperAirplaneIcon,
  MoonIcon,
  SunIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import "./navbar.css";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="app">
      <nav className="sticky bg-violet-950 top-0 z-50">
        <div className="max-w-7xl mx-auto sticky top-0">
          <div className="flex mx-auto justify-between w-5/6 ">
            {/* Primary menu and logo */}
            <div className="flex items-center gap-16 my-12">
              {/* logo */}
              <div>
                <a
                  href="/"
                  className="flex gap-1 font-bold text-gray-700 items-center "
                >
                  <img src="/Assets/RAsociate.svg" className=" h-16 md:h-20 w-auto"></img>
                  <span></span>
                </a>
              </div>
              {/* primary */}
              <div className="hidden lg:flex gap-8 uppercase font-serif menu">
                <a href="/" className=" text-gray-500  hover:text-white">
                  Home
                </a>
                <a href="team" className=" text-gray-500  hover:text-white">Team</a>
                <a href="announcements" className=" text-gray-500  hover:text-white">Announcements</a>
                <a href="#contactUs" className=" text-gray-500  hover:text-white">Contact us</a>
              </div>
            </div>
            {/* secondary */}
            <div className="flex gap-6">
              <div className="hidden xs:flex items-center gap-10">
                <div className="hidden lg:flex items-center gap-2">
                  <MoonIcon className="h-6 w-6" />
                  <SunIcon className="h-6 w-6" />
                </div>
                <div>
                  <button className="rounded-full border-solid border-2 border-gray-300 py-2 px-4 hover:bg-gray-700 hover:text-gray-100">
                    Free Trial
                  </button>
                </div>
              </div>
              {/* Mobile navigation toggle */}
              <div className="lg:hidden flex items-center">
                <button onClick={() => setToggleMenu(!toggleMenu)}>
                  <Bars3Icon className="h-6 bg-gray-500 block rounded" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* mobile navigation */}
        <div
          className={` w-full  bg-violet-950 overflow-hidden sticky top-0 z-0 flex flex-col lg:hidden gap-12  origin-top duration-700 ${
            !toggleMenu ? "h-0" : "h-full"
          }`}
        >
          <div className="px-8">
            <div className="flex flex-col gap-8 font-bold uppercase text-gray-500 font-sans tracking-wider">
            <hr/>
              <a href="/" className="border-l-4 border-gray-600 hover:text-white">
                Home
              </a>
              <hr/>
              <a href="/team">Team</a>
              <hr/>
              <a href="announcements">Annoucements</a>
              <hr/>
              <a href="#contactUs">Contact Us</a>
              <hr/>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;