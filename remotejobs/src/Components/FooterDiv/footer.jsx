import React from 'react'
import { AiFillInstagram} from 'react-icons/ai'
import { BsMeta } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='footer p-[5rem] mb-4 bg-blueColor rounded-[10px] gap-8 
    grid grid-cols-5 m-auto items-start justify-center'>
      <div>
        <div className='logoDiv'>
          <h1 className="logo text-[25px] text-white pb-[1.5rem]">
          <strong>Remote</strong>Jobs
          </h1>
        </div>
        <p className='text-white pb-[13px] opacity-70 leading-7'>
          We connect verified job seekers with handpicked Tech companies looking to 
          grow their teams. Get your new jobs now.
        </p>
      </div>

      <div className='grid'>
        <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
          Company
        </span>
         <div className='grid gap-3'>

          <li className='text-white opacity-[.7] hover:opacity-[1]'>About Us</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Features</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>News</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>FAQ</li>
        </div> 
      </div>  

      <div className='grid'>
        <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
          Resources
        </span>
         <div className='grid gap-3'>

          <li className='text-white opacity-[.7] hover:opacity-[1]'>Account</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Support Center</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Feedback</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Contact Us</li>
        </div> 
      </div> 

       <div className='grid'>
        <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
          Support
        </span>
         <div className='grid gap-3'>

          <li className='text-white opacity-[.7] hover:opacity-[1]'>Events</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Reports</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Req Demo</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Careers</li>
        </div> 
      </div>       

      <div className='grid'>
        <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
          Contact Us
        </span>
         <div>
          <small className='text-[14px] text-white'>
            josh_billion@yahoo.com
          </small>
          <div className='icons flex gap-4 py-[1rem]'>
            <AiFillInstagram className='bg-white p-[18px] h-[35px] w-[35px] rounded-full icon
            text-blueColor'/>
            <BsMeta className='bg-white p-[18px] h-[35px] w-[35px] rounded-full icon
            text-blueColor'/>
            <BsTwitter className='bg-white p-[18px] h-[35px] w-[35px] rounded-full icon 
            text-blueColor'/>  
          </div>
          {/* <li className='text-white opacity-[.7] hover:opacity-[1]'>Address</li> */}
          {/* <li className='text-white opacity-[.7] hover:opacity-[1]'>481 Kings Road</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>SW10 0LF</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>London, UK</li> */}
          {/* <li className='text-white opacity-[.7] hover:opacity-[1]'>United Kingdom</li>  */}
        </div> 
      </div>     

    </div>
  )
}

export default Footer