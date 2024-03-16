import { useState } from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-300 p-4">
      <div className="flex items-center flex-shrink-0 text-black mr-6">
        <span className="font-semibold text-xl tracking-tight">My Website</span>
      </div>
      <div className="block lg:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="flex items-center px-3 py-2 border rounded text-gray-700 border-black-900 hover:text-black hover:border-black">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div className={`${isOpen ? `block` : `hidden`} w-full block flex-grow lg:flex lg:items-center lg:w-auto`}>
        <div className="text-sm lg:font-semibold lg:text-lg lg:flex lg:flex-grow lg:justify-end lg:gap-10 lg:items-center cursor-pointer">
           <div to="/" className="block mt-4 font-semibold text-gray-300 bg-gray-800 p-1 rounded-sm w-fit sm:text-md lg:inline-block lg:mt-0 text-gray-700 lg:text-gray-200 lg:bg-gray-800 lg:rounded-sm lg:p-2 hover:text-white mr-4">
            Join Us
          </div>
          <div to="/" className="block mt-4 lg:inline-block lg:mt-0 text-black-700 font-semibold sm:text-md hover:text-white mr-4">
            Classes
          </div>
          <div to="/" className="block mt-4 lg:inline-block lg:mt-0 text-black-700 font-semibold sm:text-md hover:text-white mr-4">
            Products
          </div>
          <div to="/" className="block mt-4 lg:inline-block lg:mt-0 text-black-700 font-semibold sm:text-md hover:text-white mr-4">
            About Us
          </div>
          <div to="/" className="block mt-4 lg:inline-block lg:mt-0 text-black-700 font-semibold sm:text-md hover:text-white mr-4">
            <i></i>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar