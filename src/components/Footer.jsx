import React, { useState } from 'react'

const Footer = ({ theme, setTheme }) => {
  return (
    <div className={`h-18 w-screen flex justify-center items-center 
    ${theme ? "bg-white text-black" : "bg-black text-white"}
    `} >
      Footer

    </div >
  )
}



export default Footer