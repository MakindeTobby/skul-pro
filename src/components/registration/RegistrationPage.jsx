// RegistrationPage.js
import React, { useRef, useState } from 'react';
import ProgressTracker from './ProgressTracker';
import Step1 from './step1';
import Step2 from './step2';
import Step3 from './step3';
import { toast } from 'react-toastify';
import usePublicHttp from '../../hooks/usePublicHttp';

const RegistrationPage = ({ currentStep, setCurrentStep, handleNext, handlePrev }) => {
    const [loading, setLoading] = useState(false);
    const confirmPassword = useRef("");
    const publicHttp = usePublicHttp();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        name: '',
        // location: '',
        address: '',
        phoneNumber: '',
        // website: '',
        city: '',
        state: '',
        role: '',
        school_category: '',
    });


    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmitForm = async () => {
        const newErrors = {};



        // Check for empty fields after trimming spaces
        for (const key in formData) {
            const trimmedValue = formData[key].trim(); // Trim leading and trailing spaces
            if (!trimmedValue) {
                newErrors[key] = 'This field is required';
                // toast.error('A required Field is empty')
            }
        }
        if (formData.name.trim() === '') {
            newErrors.name = 'School Name is required';
            // toast.error('A required Field is empty')
        }

        // Check if password and confirm password match
        if (formData.password !== confirmPassword.current.value) {
            toast.error('Passwords do not match')
            return
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return toast.error("Required Field is empty")

        }

        console.log(formData);

        try {
            setLoading(true)
            const { data } = await publicHttp.post("/auth/register", formData)
            console.log(data);
            // if (data.status === "Success") {
            //     toast.success(data.message)
            //     storeCompanyId(data.company?.companyId);
            //     navigate.replace(`/admin/${data.company?.companyId}`)
            // } else {
            //     toast.error(data.message)
            //     return
            // }
            setLoading(false)
        } catch (error) {
            // toast.error(error.response.data.message);
            console.log(error);
            setLoading(false);
        }


    };




    return (
        <div className="container mx-auto md:p-6">
            <ProgressTracker currentStep={currentStep} />
            <div className="bg-white p-2 md:p-6">
                <div className="form-container">
                    {currentStep === 0 && <Step1 onNext={handleNext} formData={formData} handleChange={handleChange} errors={errors} />}
                    {currentStep === 1 && <Step2 onNext={handleNext} onPrev={handlePrev} formData={formData}
                        handleSubmitForm={handleSubmitForm} handleChange={handleChange} errors={errors} confirmPassword={confirmPassword} loading={loading} />}
                    {currentStep === 2 && <Step3 onPrev={handlePrev} />}
                </div>
            </div>
        </div>
    );
};

export default RegistrationPage;
