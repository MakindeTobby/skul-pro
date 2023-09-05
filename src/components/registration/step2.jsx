// Step2.js
import React from 'react';
import { MdLock, MdLockPerson } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Step2 = ({ onNext, onPrev }) => {
    return (
        <div>
            <form className='mx-auto mb-0  max-w-md space-y-4'>
                {/* Add additional fields for Step 2 */}
                {/* <div className="mb-4">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                        Address
                    </label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        required
                    />
                </div> */}
                <div className="relative mb-4">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                        <MdLock className='text-xl text-gray-400' />

                    </div>
                    <input type="text" className=" border-2 p-3 border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 
                 
                 "
                        placeholder="Create Password" />
                </div>
                <div className="relative mb-4">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                        <MdLockPerson className='text-xl text-gray-400' />

                    </div>
                    <input type="text" className=" border-2 p-3 border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 
                 
                 "
                        placeholder="Re-Enter Password" />
                </div>
                {/* Add more fields as needed */}
                <div className="flex gap-3 w-full">
                    <button
                        type="button"
                        onClick={onPrev}
                        className="px-4 py-3 border-2 border-slate-800 text-slate-800
                        transition duration-300 transform active:scale-95 ease-in-out
                        hover:bg-slate-800 hover:text-white rounded-md w-1/2"
                    >
                        Back
                    </button>
                    <button
                        type="button"
                        onClick={onNext}
                        className="px-4 py-3 bg-slate-800 text-white rounded-md
                        transition duration-300 transform active:scale-95 ease-in-out
                        w-1/2"
                    >
                        Submit
                    </button>
                </div>
                <Link to={"/login"} className='text-sm block text-center mt-3'>
                    Have an account already? <span className='text-yellow-500 font-bold'>Log in.</span>
                </Link>
            </form>
        </div>
    );
};

export default Step2;
