// Step1.js
import React, { useState } from 'react';
import { FaArrowDown, FaGraduationCap, FaRegEnvelope } from 'react-icons/fa';
import { BsTelephone } from 'react-icons/bs';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { MdOutlineArrowDropDown } from 'react-icons/md';

const Step1 = ({ onNext }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate form data if needed

        // Proceed to the next step
        onNext();
    };

    return (
        <form onSubmit={handleSubmit} className='mx-auto mb-0  max-w-md space-y-4'>
            {/* <div className="mb-4">
                <label htmlFor="firstName" className="block text-sm font-medium  text-gray-700">
                    First Name
                </label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    required
                />
            </div> */}
            {/* dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white */}
            <div className="relative mb-4">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                    <FaGraduationCap className='text-xl text-gray-400' />

                </div>
                <input type="text" className=" border-2 p-3 border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 
                 
                 "
                    placeholder="School name" />
            </div>
            <div className="relative mb-4">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                    <FaRegEnvelope className='text-xl text-gray-400' />

                </div>
                <input type="text" className=" border-2 p-3 border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 
                 
                 "
                    placeholder="email@gmail.com" />
            </div>
            <div className="relative mb-4">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                    <BsTelephone className='text-xl text-gray-400' />

                </div>
                <input type="text" className=" border-2 p-3 border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 
                 
                 "
                    placeholder="Phone number" />
            </div>
            <div className="relative mb-4">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                    <HiOutlineLocationMarker className='text-xl text-gray-400' />


                </div>
                <input type="text" className=" border-2 p-3 border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 
                 
                 "
                    placeholder="Physical Address" />
            </div>
            <div className="relative mb-4">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                    <HiOutlineLocationMarker className='text-xl text-gray-400' />

                </div>
                <select className=" border-2 py-3 px-10 border-gray-300 text-gray-900 text-sm rounded-lg block w-full  
                 
                 "
                >
                    <option value="">Select State</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <MdOutlineArrowDropDown className="text-3xl text-gray-500" />
                </div>
            </div>
            <div className="relative mb-4">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                    <FaGraduationCap className='text-xl text-gray-400' />

                </div>



                <select
                    className="border-2 py-3 px-10 border-gray-300 text-gray-900 text-sm rounded-lg block w-full appearance-none bg-no-repeat bg-right-center pr-10"
                >
                    <option value="">Select School Category</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <MdOutlineArrowDropDown className="text-3xl text-gray-500" />
                </div>
            </div>

            <div className="flex justify-between mb-4">
                <button type="submit" className="px-4 py-3 bg-slate-800 
                transition duration-300 transform active:scale-95 ease-in-out
                w-full text-white rounded-md">
                    Continue
                </button>
            </div>
            <span className='text-sm'>
                By signing up, you agree to the <span className='text-yellow-500'>Terms of Service </span>
                and <span className='text-yellow-500'> Privacy Policy</span>, including <span className='text-yellow-500'>Cookie use.</span>
            </span>
            <Link to={"/login"} className='text-sm block text-center mt-3'>
                Have an account already? <span className='text-yellow-500 font-bold'>Log in.</span>
            </Link>
        </form>
    );
};

export default Step1;
