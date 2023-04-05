import React from 'react'
import logo9 from '../../Assets/logo9.png'

const Value = () => {
  return (
    <div className='mb-[4rem] mt-[6rem]'>
      <h1 className='text-textColor text-[25px] py-[2rem] pb-[3rem] font-bold 
      w-[400px] block'>Being True to Ourselves and Accountability
      </h1>

      <div className='grip gap-[10rem] grid-cols-3 items-center'>
        <div className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]'>
          <div className='flex items-center gap-3'>
            <div className='imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] 
              h-[40px] w-[20%] flex items-center justify-center'>
              <img src={logo9} alt="" className='w-[70%]'></img>
            </div>
            <span className='text'>

            </span>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Value