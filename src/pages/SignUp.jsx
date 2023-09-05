import { useState } from "react";
import RegistrationPage from "../components/registration/RegistrationPage";
import { Link } from "react-router-dom";

const SignUp = () => {

    const [currentStep, setCurrentStep] = useState(0);

    const handleNext = () => {
        setCurrentStep((prevStep) => prevStep + 1);
    };

    const handlePrev = () => {
        setCurrentStep((prevStep) => prevStep - 1);
    };
    return (
        <>

            <section className="w-full flex flex-wrap h-[100vh]">
                <Link to={"/"} className="absolute top-5">
                    <img src="/logo/scHub_logo.png" alt="logo" />
                </Link>
                <div className="w-full px-2 py-24 sm:px-2 sm:py-4 lg:w-1/2 lg:px-16 lg:py-16 h-[100vh] overflow-y-auto">
                    <div className="">
                        <div className="mb-4 text-center mx-auto  max-w-md space-y-4">
                            <h1 className="text-3xl text-slate-800 font-bold mb-4">Create an Account</h1>
                            {currentStep === 0 && <span className="text-sm">Please fill in your school details so we can create an account and remember your school.</span>}
                            {currentStep === 1 && <span className="text-sm">Please fill in your eight digit password so we can create an account and remember your school.</span>}
                            {currentStep === 2 && <span className="text-sm">We are almost done with creating your account.</span>}

                        </div>
                        <RegistrationPage currentStep={currentStep} setCurrentStep={setCurrentStep} handleNext={handleNext} handlePrev={handlePrev} />
                    </div>

                    {/* <span className="text-xs">Have an account already? Log in.</span> */}
                </div>
                <div className="w-full sm:h-96 lg:h-full lg:w-1/2">
                    {/* <div className="w-1/2"> */}
                    {currentStep === 0 && <img alt="Welcome" src="/images/bg-login.png" className=" h-full w-full object-cover" />}
                    {currentStep === 1 && <img alt="Security" src="/images/pasword.png" className=" h-full w-full object-cover" />}
                    {currentStep === 2 && <img alt="Confirmation" src="/images/mail.png" className=" h-full w-full object-cover" />}


                    {/* </div> */}
                </div>
            </section>
        </>
    );
}

export default SignUp;