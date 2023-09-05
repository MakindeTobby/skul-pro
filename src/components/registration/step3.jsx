// Step3.js
import React from 'react';
import { Link } from 'react-router-dom';

const Step3 = ({ onPrev }) => {
    return (
        <div className='mx-auto mb-0  max-w-md space-y-4'>

            <div className='w-full bg-slate-200 flex flex-col text-start px-10 py-20 gap-4 rounded-lg'>
                <span className='text-sm'>
                    A verification link has been sent to your email to activate your account.
                    Link expires after 24 hours.

                </span>
                <span className='text-sm'>
                    <span className='font-bold'> Didn’t receive an email?</span> <button className='font-bold text-yellow-500'>Resend</button>
                </span>

            </div>

            {/* Add more information as needed */}
            <div className="w-full">

                <button
                    type="button"
                    onClick={onPrev}
                    className="px-4 py-3 bg-slate-800 text-white 
                    transition duration-300 transform active:scale-95 ease-in-out
                    rounded-md w-full"
                >
                    Done
                </button>
            </div>
            <Link to={"/login"} className='text-sm block text-center mt-3'>
                Have an account already? <span className='text-yellow-500 font-bold'>Log in.</span>
            </Link>
        </div>
    );
};

export default Step3;
