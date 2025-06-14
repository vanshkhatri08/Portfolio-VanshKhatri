import React from 'react'
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
const Footer = () => {
  return (
    <div className='flex justify-between'>
        <div className='m-2 font-thin tracking-tight text-2xl '>Vansh Khatri</div>
        <div className='m-2 flex items-center justify-end gap-4 text-3xl '>
            <a href="https://www.linkedin.com/in/vanshkhatri/" target='_blank'><FaLinkedin /></a>
        </div>
    </div>
  )
}

export default Footer
