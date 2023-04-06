import React from 'react'
import logo9 from '../../Assets/logo9.png'
import unedited from '../../Assets/unedited.png'
import logo10 from '../../Assets/logo10.png'


const Value = () => {
  return (
    <div className='mb-[4rem] mt-[6rem]'>
      <h1 className='text-textColor text-[25px] py-[2rem] pb-[3rem] font-bold 
      w-[400px] block'>Being True to Ourselves and Accountability
      </h1>

      <div className='grid gap-[10rem] grid-cols-3 items-center'>

        <div className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]'>
          <div className='flex items-center gap-3'>
            <div className='imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] 
              h-[40px] w-[40px] flex items-center justify-center'>
              <img src={logo9} alt="" className='w-[70%]'/>
            </div>

            <span className='font-semibold text-textColor text-[18px]'>
              Simplicity
            </span>
          </div>
          <p className='text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold '>
            Minimalist and beauty are our hallmarks in everything we do on a daily basis
          </p>
        </div>
{/* second grid goes here */}
        <div className='singleGrid rounded-[10px] hover:bg-[#f7d1e1] p-[1.5rem]'>
          <div className='flex items-center gap-3'>
            <div className='imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] 
              h-[40px] w-[40px] flex items-center justify-center'>
              <img src={unedited} alt="" className='w-[70%]'/>
            </div>

            <span className='font-semibold text-textColor text-[18px]'>
              Integrity
            </span>
          </div>
          <p className='text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold '>
            Minimalist and beauty are our hallmarks in everything we do on a daily basis
          </p>
        </div> 

{/* Third grid goes here*/}

        <div className='singleGrid rounded-[10px] hover:bg-[#04f91d] p-[1.5rem]'>
          <div className='flex items-center gap-3'>
            <div className='imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] 
              h-[40px] w-[40px] flex items-center justify-center'>
              <img src={logo10} alt="" className='w-[70%]'/>
            </div>

            <span className='font-semibold text-textColor text-[18px]'>
              Trust
            </span>
          </div>
          <p className='text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold '>
            We work on the basis on trust ; thereby, having a strong relationship with our clients
          </p>
        </div>
      </div>

      <div className='card mt-[2rem] flex justify-between bg-blueColor p-[5rem]
        rounded-[10px]'>
      <div>
        <h1 className='text-blueColor text-[30px] font-bold'>

        </h1>
      </div>
      </div>
    </div>
  )
}

export default Value