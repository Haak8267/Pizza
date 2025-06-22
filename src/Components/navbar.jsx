import React from 'react'
import ghanaflag from '../assets/ghanaflag.jpg'
import nigeriaflag from '../assets/nigeriaflag.png'
import horizon from '../assets/horizon.jpg'
import kenyaflag from '../assets/kenyaflag.jpg'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center text-white font-bold bg-sky-500 h-[4rem] px-4 py-2 m-1">
      <div className="w-[8.2rem] h-[3rem]">
        <img src={horizon} alt="horizon logo" className="h-full w-auto object-contain" />
      </div>

      <ul className="flex gap-2 items-center">
        <li className="h-[2rem] w-[2rem]">
          <img src={ghanaflag} alt="Ghana flag" className="h-full w-full object-contain" />
        </li>
        <li className="h-[2rem] w-[2rem]">
          <img src={nigeriaflag} alt="Nigeria flag" className="h-full w-full object-contain" />
        </li>
        <li className="h-[2rem] w-[2rem]">
          <img src={kenyaflag} alt="Kenya flag" className="h-full w-full object-contain" />
        </li>
      </ul>

      <div class="relative group">
                    <button class=" w-[6rem] h-[2rem] rounded-lg text-white"> About Us</button>
                    <div class=" absolute hidden bg-rose-500  group-hover:block rounded-lg">
                     <a href="#" class="block px-4 py-2">About</a>
                     <a href="#" class="block px-4 py-2">Home</a>
                     <a href="#" class="block px-4 py-2">Services</a>
                     <a href="#" class="block px-4 py-2">Contact</a>
                    </div>
                </div>

    </nav>
  )
}

export default Navbar
