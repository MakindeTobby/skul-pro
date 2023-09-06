// Step1.js
import React, { useState } from 'react';
import { FaArrowDown, FaGraduationCap, FaRegEnvelope } from 'react-icons/fa';
import { BsTelephone } from 'react-icons/bs';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { MdOutlineArrowDropDown, MdPersonOutline } from 'react-icons/md';

const Step1 = ({ onNext, formData, handleChange, errors }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate form data if needed

        // Proceed to the next step
        onNext();
    };

    // {
    //     
    //     
    //     "location": "nigeria",
    //     
    //    
    //     "website": "",
    //     
    //     
    //     "role": "Teacher",
    //    
    // }

    return (
        <form onSubmit={handleSubmit} className='mx-auto mb-0  max-w-md space-y-4'>

            <div className="relative mb-4">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                    <FaGraduationCap className='text-xl text-gray-400' />

                </div>
                <input type="text"
                    className={`border-2 p-3 ${errors.name ? "border-red-500" : "border-gray-300"}  text-gray-900 text-sm rounded-lg block w-full pl-10 
                 
                    `}
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="School name" />
            </div>
            <div className="relative mb-4">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                    <FaRegEnvelope className='text-xl text-gray-400' />

                </div>
                <input type="email" className={`border-2 p-3 ${errors.email ? "border-red-500" : "border-gray-300"}  text-gray-900 text-sm rounded-lg block w-full pl-10 
                 
                 `}
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@gmail.com" required />
            </div>
            <div className="relative mb-4">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                    <BsTelephone className='text-xl text-gray-400' />

                </div>
                <input type="text" className={`border-2 p-3 ${errors.phoneNumber ? "border-red-500" : "border-gray-300"}  text-gray-900 text-sm rounded-lg block w-full pl-10 
                 
                 `}
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                    placeholder="Phone number" />
            </div>
            <div className="relative mb-4">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                    <HiOutlineLocationMarker className='text-xl text-gray-400' />


                </div>
                <input type="text" className={`border-2 p-3 ${errors.address ? "border-red-500" : "border-gray-300"}  text-gray-900 text-sm rounded-lg block w-full pl-10 
                 
                 `}
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    placeholder="Physical Address" />
            </div>
            <div className="relative mb-4">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                    <HiOutlineLocationMarker className='text-xl text-gray-400' />


                </div>
                <input type="text" className={`border-2 p-3 ${errors.city ? "border-red-500" : "border-gray-300"}  text-gray-900 text-sm rounded-lg block w-full pl-10 
                 
                 `}
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    placeholder="City" />
            </div>
            <div className="relative mb-4">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                    <HiOutlineLocationMarker className='text-xl text-gray-400' />

                </div>
                <select className={`border-2 p-3 ${errors.city ? "border-red-500" : "border-gray-300"}  text-gray-900 text-sm rounded-lg block w-full pl-10 
                 
                 `}
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                >
                    <option value="" hidden>Select State</option>
                    <option value="Oyo" >Oyo</option>
                    <option value="Lagos" >Lagos</option>
                    <option value="Ogun" >Ogun</option>
                    <option value="Abuja" >Abuja</option>
                    <option value="Ekiti" >Ekiti</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <MdOutlineArrowDropDown className="text-3xl text-gray-500" />
                </div>
            </div>

            <div className="relative mb-4">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                    <MdPersonOutline className='text-xl text-gray-400' />


                </div>
                <input type="text" className={`border-2 p-3 ${errors.role ? "border-red-500" : "border-gray-300"}  text-gray-900 text-sm rounded-lg block w-full pl-10 
                 
                 `}
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    required
                    placeholder="Role (e.g School Principal)" />
            </div>


            <div className="relative mb-4">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                    <FaGraduationCap className='text-xl text-gray-400' />

                </div>



                <select
                    className="border-2 py-3 px-10 border-gray-300 text-gray-900 text-sm rounded-lg block w-full appearance-none bg-no-repeat bg-right-center pr-10"
                    id="school_category"
                    name="school_category"
                    value={formData.school_category}
                    onChange={handleChange}
                    required

                >
                    <option value="" hidden>Select School Category</option>
                    <option value="Primary">Primary</option>
                    <option value="Secondary">Secondary</option>
                    <option value="College">College</option>
                    <option value="Others">Others</option>
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
