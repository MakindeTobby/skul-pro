// RegistrationPage.js
import React, { useState } from 'react';
import ProgressTracker from './ProgressTracker';
import Step1 from './step1';
import Step2 from './step2';
import Step3 from './step3';

const RegistrationPage = ({ currentStep, setCurrentStep, handleNext, handlePrev }) => {


    return (
        <div className="container mx-auto md:p-6">
            <ProgressTracker currentStep={currentStep} />
            <div className="bg-white p-2 md:p-6">
                <div className="form-container">
                    {currentStep === 0 && <Step1 onNext={handleNext} />}
                    {currentStep === 1 && <Step2 onNext={handleNext} onPrev={handlePrev} />}
                    {currentStep === 2 && <Step3 onPrev={handlePrev} />}
                </div>
            </div>
        </div>
    );
};

export default RegistrationPage;
