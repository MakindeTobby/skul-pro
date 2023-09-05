import React, { useState } from 'react';
import { logo, lock, hamburgerMenu, close } from '../assets'
import { Link } from 'react-router-dom';
import { MdOutlineArrowDropDown } from 'react-icons/md';

const Navbar = () => {

    const [toggle, setToggle] = useState(false)
    const handleClick = () => setToggle(!toggle)

    return (
        <div className='w-full h-[80px] bg-white border-b'>
            <div className='md:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex justify-between items-center md:px-0 px-4'>
                <Link to={"/"} className="">
                    <img src="/logo/logo.png" alt="logo" width={100} />
                </Link>

                {/* <img src={logo} className="h-[25px]" /> */}

                <div className='hidden md:flex items-center '>
                    <ul className='flex gap-4'>
                        <li className='relative'>
                            <select className=" text-start outline-none font-semibold  px-10 border-gray-300 text-gray-900    
                 
                 "
                            >
                                <option value="hidden">School Hub</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                <MdOutlineArrowDropDown className="text-3xl text-gray-500" />
                            </div>
                        </li>
                        <li className='relative'>
                            <select className=" text-start outline-none font-semibold  px-10 border-gray-300 text-gray-900    
                 
                 "
                            >
                                <option value="hidden">Payment Plan</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                <MdOutlineArrowDropDown className="text-3xl text-gray-500" />
                            </div>
                        </li>

                        <li className='font-semibold'>About Us</li>

                    </ul>
                </div>


                <div className='hidden md:flex gap-2'>
                    <Link to={"/login"} className='flex font-bold justify-between rounded-md items-center border-2
                    transition duration-300 transform active:scale-95 ease-in-out
                    border-yellow-500  hover:bg-yellow-500 px-6 gap-2'>
                        {/* <img src={lock} /> */}
                        Login
                    </Link>
                    <Link to={"/register"} className='px-8 py-3 rounded-md bg-slate-800 text-white font-bold  
                    transition duration-300 transform active:scale-95 ease-in-out'>Get Started</Link>
                </div>

                <div className='md:hidden' onClick={handleClick}>
                    <img src={toggle ? close : hamburgerMenu} />
                </div>




            </div>

            <div className={toggle ? 'absolute z-10 p-4  bg-white w-full px-8 md:hidden border-b' : 'hidden'}>
                <ul className='text-start'>
                    <li className='relative mb-10'>
                        <select className=" text-start outline-none font-semibold  pr-10 border-gray-300 text-gray-900    
                 
                 "
                        >
                            <option value="hidden">School Hub</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                            <MdOutlineArrowDropDown className="text-3xl text-gray-500" />
                        </div>
                    </li>
                    <li className='relative mb-10'>
                        <select className=" text-start outline-none font-semibold  pr-10 border-gray-300 text-gray-900    
                 
                 "
                        >
                            <option value="hidden">Payment Plan</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                            <MdOutlineArrowDropDown className="text-3xl text-gray-500" />
                        </div>
                    </li>

                    <li className='font-semibold'>About Us</li>


                    <div className='flex flex-col my-4 gap-4'>
                        <Link to={"/login"} className='border-2 border-yellow-500 rounded-md flex 
                        transition duration-300 transform active:scale-95 ease-in-out hover:bg-yellow-500
                        justify-center items-center  bg-transparent  px-6 gap-2 py-4'>
                            {/* <img src={lock} /> */}
                            Login
                        </Link>
                        <Link to={"/register"} className='px-8 py-5 rounded-md bg-slate-800 text-white font-bold
                        transition duration-300 transform active:scale-95 ease-in-out
                        '>Get Started</Link>
                    </div>
                </ul>
            </div>


        </div>
    )
}

export default Navbar