import React from 'react'
import { BiTimeFive } from 'react-icons/bi'
import logo1 from '../../Assets/logo1.png'
import logo2 from '../../Assets/logo2.png'
import logo3 from '../../Assets/logo3.png'
import logo4 from '../../Assets/logo4.png'
import logo5 from '../../Assets/logo5.png'
import logo6 from '../../Assets/logo6.png'
import logo7 from '../../Assets/logo7.png'
import logo8 from '../../Assets/logo8.png'


// listing all other jobs using a Map() which is a high order array 

const data = [
  {
    id:1,
    image:logo1,
    title: 'Web Developer',
    time: 'Now',
    location: 'Canada',
    desc: 'Lorem empire, Lorem ipsum dolor sit amet, consectet',
    company: 'Bravo',
  },
  {
    id:2,
    image:logo2,
    title: 'UI Designer',
    time: 'Now',
    location: 'Bali',
    desc: 'Lorem empire, Lorem ipsum dolor sit amet, consectet',
    company: 'Google',
  },
  {
    id:3,
    image:logo3,
    title: 'Prod. Manager',
    time: 'Now',
    location: 'London',
    desc: 'Lorem empire, Lorem ipsum dolor sit amet, consectet',
    company: 'Aspen Hosp',
  },
  {
    id:4,
    image:logo4,
    title: 'Data Scientist',
    time: 'Now',
    location: 'New York',
    desc: 'Lorem empire, Lorem ipsum dolor sit amet, consectet',
    company: 'Bolt',
  },
  {
    id:5,
    image:logo5,
    title: 'Scrum Master',
    time: '15hrs',
    location: 'Australia',
    desc: 'Lorem empire, Lorem ipsum dolor sit amet, consectet',
    company: 'Cambridge Health',
  },
  {
    id:6,
    image:logo6,
    title: 'Project Mgr',
    time: '4hrs',
    location: 'Dubai',
    desc: 'Lorem empire, Lorem ipsum dolor sit amet, consectet',
    company: 'Europe2',
  },
  {
    id:7,
    image:logo7,
    title: 'Data Analyst',
    time: '24hrs',
    location: '',
    desc: 'Lorem empire, Lorem ipsum dolor sit amet, consectet',
    company: 'Aspen Hosp',
  },
  {
    id:3,
    image:logo3,
    title: 'Prod. Manager',
    time: 'Now',
    location: 'London',
    desc: 'Lorem empire, Lorem ipsum dolor sit amet, consectet',
    company: 'Aspen Hosp',
  },

]

const Jobs = () => {
  return (
    <div>
      <div className='jobContainer flex gap-10 justify-center flex-wrap items-center
      py-10'>
        {/* old code has been hashed now that the Map() is working */}
        {/* <div className='group group/item singleJob w-[250px] p-[20px] bg-white rounded
        [10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg'>

        <span className='flex justify-between items-center gap-4 '>
          <h1 className='text-[16px] font-semibold text-textColor
            group-hover:text-white'>Web Developer</h1>
          <span className='flex items-center text-[#ccc] gap-1 '>
            <BiTimeFive/>Now
          </span>
        </span>

        <h6 className='text-[#ccc]'>Canada</h6>
        <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px]
        group-hover:text-white'>Lorem empire, Lorem ipsum dolor sit amet, consectet
        </p>

        <div className="company flex items-center gap-2">
        <img src={logo1} alt='Company Logo' className='w-[40%]'/>
        <span className='text-[14px] py-[1rem] block group-hover:text-white'>Bravo
        </span>
        </div>

        <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px]
        semi-bold text-textColor hover:bg-white group-hover/item:text-textColor
        group-hover:text-white'>
        Apply Now
        </button>
        </div> */}
      
      {
        data.map(({id,image,title,time,location,desc,company}) => {
          return (
            <div key={id} className='group group/item singleJob w-[250px] p-[20px] bg-white 
            rounded [10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg'>
    
            <span className='flex justify-between items-center gap-4 '>
              <h1 className='text-[16px] font-semibold text-textColor
                group-hover:text-white'>{title}</h1>
              <span className='flex items-center text-[#ccc] gap-1 '>
                <BiTimeFive/>{time}
              </span>
            </span>
    
            <h6 className='text-[#ccc]'>{location}</h6>
            <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px]
            group-hover:text-white'>{desc}
            </p>
    
            <div className="company flex items-center gap-2">
            <img src={image} alt='Company Logo' className='w-[40%]'/>
            <span className='text-[14px] py-[1rem] block group-hover:text-white'>{company}
            </span>
            </div>
    
            <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px]
            semi-bold text-textColor hover:bg-white group-hover/item:text-textColor
            group-hover:text-white'>
            Apply Now
            </button>
            </div>
          )
        })
      }

      </div>
    </div>
  )
}

export default Jobs