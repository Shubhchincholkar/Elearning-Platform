import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineWbSunny } from "react-icons/md";




const Navbar = ({ theme, setTheme }) => {



  return (

    <div className={`h-18 w-screen flex justify-center items-center gap-16
    ${(theme) ? "bg-white text-black" : "bg-black text-white"}
  `}>
      <div className='flex justify-center items-center gap-14'>

        <Link to="/" className='border h-8 w-16 flex justify-center items-center rounded-4xl hover:text-red-400 '>Home</Link>
        <Link to="/about" className='border h-8 w-16 flex justify-center items-center rounded-4xl'>About</Link>
        <Link to="/courses" className='border h-8 w-16 flex justify-center items-center rounded-4xl'>Courses</Link>
        <Link to="/contact" className='border h-8 w-16 flex justify-center items-center rounded-4xl'>Contact</Link>
      </div >

      <button
        className='border-2 rounded-xl p-2'
        onClick={() => { setTheme(!theme) }}
      >
        {theme ? <MdOutlineDarkMode /> : <MdOutlineWbSunny />}


      </button>
    </div >
  )
}

export default Navbar