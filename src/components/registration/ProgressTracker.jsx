// ProgressTracker.js
import React from 'react';

const ProgressTracker = ({ currentStep }) => {
    const steps = ['Step 1', 'Step 2', 'Step 3']; // Add your step labels here

    return (
        <>
            <div className="mb-8  mx-auto  max-w-md space-y-4">
                <div className="relative">
                    {/* Horizontal Line */}
                    <div className="w-full h-1 bg-gray-300 mt-2 rounded"></div>

                    {/* Circles */}
                    <div className="flex justify-between -mt-5">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="relative"
                            >
                                {/* Circle */}
                                <div
                                    className={`w-8 h-8 rounded-full text-white  flex items-center justify-center ${currentStep >= index ? 'bg-slate-800' : 'bg-gray-300'
                                        }`}
                                >
                                    {currentStep === index ? index + 1 : (currentStep > index ? index + 1 : '')}
                                </div>

                                {/* Circle Connector */}
                                {index !== steps.length - 1 && (
                                    <div
                                    // className={`absolute top-4 w-2 h-2  ${currentStep >= index ? 'bg-blue-500' : ''
                                    //     }`}
                                    // style={{
                                    //     left: `${(index * 100) / (steps.length - 1)}%`,
                                    // }}
                                    ></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>



        </>
    );
};

export default ProgressTracker;
