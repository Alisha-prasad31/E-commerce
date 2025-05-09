
import { assets } from '../assets/assets'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <img src={assets.logo} className='mb-5 w-32' alt="" srcset="" />
            <p className='w-full md:w-2/3 text-gray-600'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum.</p>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>Company</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
            </ul>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+91 679*6894606</li>
                <li>Trendy@gmail.com</li>
            </ul>
        </div>
        <div className='flex justify-center'> 
            <hr className='w-full'/>
            <hr className='flex-grow' /> 

            <p className='py-5 text-sm text-center'>Copyright 2025@ Trendify.com All Right Reserved</p>
            <hr className='flex-grow' />
        </div>
    </div>
  )
}

export default Footer