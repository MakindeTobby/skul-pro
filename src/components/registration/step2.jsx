// Step2.js
import React from 'react';
import { MdLock, MdLockPerson, MdPersonOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Step2 = ({ onNext, onPrev, formData, handleChange, handleSubmitForm, errors, confirmPassword, loading }) => {
    return (
        <div>
            <form className='mx-auto mb-0  max-w-md space-y-4'>
                <div className="relative mb-4 hidden">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                        <MdPersonOutline className='text-xl text-gray-400' />

                    </div>
                    <input type="text"
                        className={`border-2 p-3 border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 
                 
                    `}
                        id="username"
                        name="username"
                        autoComplete="username"

                        placeholder="username" />
                </div>

                <div className="relative mb-4">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                        <MdLock className='text-xl text-gray-400'
                        />


                    </div>
                    <input type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        autoComplete="new-password"

                        className={` border-2 p-3 ${errors.password ? "border-red-500" : "border-gray-300"}  text-gray-900 text-sm rounded-lg block w-full pl-10 
                 
                        `}
                        placeholder="Create Password" required />
                </div>
                <div className="relative mb-4">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                        <MdLockPerson className='text-xl text-gray-400' />

                    </div>
                    <input type="password" className={` border-2 p-3 border-gray-300  text-gray-900 text-sm rounded-lg block w-full pl-10 
                 
                 `}
                        id="confirmPassword"
                        name="confirmPassword"

                        ref={confirmPassword}
                        autoComplete="new-password"
                        placeholder="Re-Enter Password" required />
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
                        onClick={handleSubmitForm}
                        className="px-4 py-3 bg-slate-800 text-white rounded-md
                        transition duration-300 transform active:scale-95 ease-in-out
                        w-1/2"
                    >
                        {loading ? <svg aria-hidden="true" role="status" className="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                        </svg> : "Submit"}
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
