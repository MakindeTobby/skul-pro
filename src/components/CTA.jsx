import React from 'react'
import { cta } from '../assets'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <div className='w-full bg-[#e2e8f0] py-24'>
      <div className='md:max-w-[1480px] m-auto grid md:grid-cols-2 gap-8 max-w-[600px] items-center  px-4 md:px-0'>

        <img src={cta} className="w-[650px] mx-auto" />


        <div>
          <h1 className='py-2  text-3xl font-semibold'>Join <span className='text-slate-800'> us </span> today </h1>
          <br />
          {/* <p className='py-2 text-lg text-gray-600'>Start by registering for free</p> */}
          <Link to={"/register"} className='max-[780px]:w-full my-4 px-8 py-5 rounded-md bg-slate-800 text-white font-bold'

          >Sign Up For Free</Link>


        </div>




      </div>


    </div>
  )
}

export default CTA