import React from 'react';
import { heroImg } from '../assets';
import { AiOutlineSearch } from 'react-icons/ai'
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className='w-full bg-white py-24'>
            <div className='md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px]  px-4 md:px-2'>

                <div className='flex flex-col justify-start items-start gap-6'>
                    {/* <p className='py-2 text-2xl text-slate-800 font-medium'>START TO SUCCESS</p> */}
                    <h1 className='md:leading-[95px] py-2 md:text-8xl text-5xl font-semibold text-left'>School <span className='text-yellow-500'>Hub</span>
                    </h1>
                    <p className='py-2 text-lg text-start text-gray-600'>Management of your school administrative and academic affairs with the click of a button</p>

                    <form className='bg-white border max-w-[500px] p-4 input-box-shadow rounded-md flex justify-between'>
                        <input
                            className='bg-white'
                            type="text"
                            placeholder='Give it a shot!'
                            readOnly
                        />
                        <Link to={"/register"} className='px-8 py-3 rounded-md bg-slate-800 text-white font-bold  transition duration-300 transform active:scale-95 ease-in-out'>Get Started</Link>
                    </form>
                </div>
                <div>

                    <img src="/images/hero_img.jpg" className="md:order-last  order-first" />
                </div>






            </div>


        </div>
    )
}

export default Hero