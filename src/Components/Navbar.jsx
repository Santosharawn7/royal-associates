import React, {useState} from "react";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {

    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }


    return(
        <div className="text-white bg-black flex  sticky top-0 sticky justify-between items-center h-24 max-w-full mx-auto px-4">
            <h1 className=" w-full text-3xl sticky  font-bold text-[#00df9a]">RoyalAssociates</h1>
            <ul className="md:flex hidden">
                <li className="p-4">Home</li>
                <li className="p-4">About</li>
                <li className="p-4">Contact</li>
            </ul>
            <div onClick={handleNav} className="block md:hidden">
                {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
                
            </div>
            <div className={!nav ? 'fixed bg-[#000300] left-0 top-0 w-[60%] border-r border-r-gray-900 h-full ease-in-out duration-500' : 'fixed left-[100%]' }>
            <h1 className=" w-full sticky text-3xl font-bold text-[#00df9a]">RoyalAssociates</h1>
                <ul className="pt-4 font-bold uppercase">
                    <li className="p-4 border-gray-600 border-b">Home</li>
                    <li className="p-4 border-gray-600 border-b">About</li>
                    <li className="p-4 border-gray-600 border-b">Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar