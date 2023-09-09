import axios from "axios";
import { useEffect, useState } from "react";
import { FaEye, FaEyeSlash, FaLongArrowAltRight, FaRegEnvelope } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
    const [show, setShow] = useState(false);
    let navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false)
    let errorsObj = { email: '', password: '' };
    const [errorss, setErrorss] = useState(errorsObj);

    const auth = () => {
        const jwt = localStorage.getItem("Auth")
        if (jwt) {
            return true
        } else {
            return false
        }
    }
    const userD = auth()

    useEffect(() => {
        if (userD) {
            navigate("/")
        }
    }, [])


    const newLogin = {
        email,
        password,
    }
    const handleLogin = async (e) => {
        e.preventDefault();
        let error = false;
        const errorObj = { ...errorsObj };
        if (email.trim() === '') {
            errorObj.email = 'Email cannot be empty';
            error = true;
        }
        if (password.trim() === '') {
            errorObj.password = 'Password cannot be empty';
            error = true;
        }

        setErrorss(errorObj);
        if (error) return;


        try {
            setLoading(true);
            const { data } = await axios.post('https://myschoolapp.onrender.com/auth/login', newLogin)
            console.log(data);
            if (data.message) {
                toast.success(data.message)

                localStorage.setItem("Auth", data.token)
                navigate('/');
                setLoading(false);

            } else {
                toast.error(data.message);
                setLoading(false);

                return
            }
            setLoading(false)
        } catch (error) {
            console.log(error);
            toast.error(error?.response?.data.message);
            setLoading(false);
        }
        finally {
            setLoading(false)
        }
    }

    const rateList = [{
        title: "School Administrator",
        sub: "an hour (2 hour min)"
    },
    {
        title: "Teachers/Tutors",
        sub: "an hour (3.5 hours)"
    }

    ]
    const [rate, setRate] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const handleRadioChange = (option) => {
        setSelectedOption(option);
    };


    return (


        <>

            <section className="relative flex flex-wrap lg:h-screen lg:items-center py-8 lg:py-0 ">

                <div className="w-full px-4 py-8 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24 h-[100vh] overflow-y-auto">
                    <Link to={"/"} className="">
                        <img src="/logo/logo.png" alt="logo" width={100} />
                    </Link>
                    <form action="post" className="mx-auto mb-0 mt-8 max-w-md space-y-4" onSubmit={handleLogin}>
                        <div className="mx-auto max-w-lg text-start mb-6">
                            <h1 className="text-2xl font-bold sm:text-3xl">Sign in</h1>
                            <span className="text-sm">Select your role</span>

                        </div>

                        {rateList.map((value, index) => (

                            <label key={index} className="mt-6 cursor-pointer">
                                <div className="flex items-start mb-4 border-2 border-gray-300 p-4 rounded-lg ">
                                    <div className="flex items-center h-5">
                                        <input
                                            type='radio'
                                            name='selectedOption'
                                            value={value}
                                            className='appearance-none h-4 w-4 border rounded-lg border-black checked:bg-black checked:border-transparent'
                                            onChange={() => handleRadioChange(value)}
                                            checked={selectedOption && selectedOption.title === value.title}
                                        />
                                    </div>
                                    <span htmlFor="remember" className="ml-2 text-start text-xs font-medium text-gray-900 dark:text-gray-500">
                                        <span className="block font-bold text-sm">{value.title}</span>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam omnis dolorem tempore dolores,
                                        illum ipsa molestiae suscipit ea atque exercitationem.
                                    </span>
                                </div>
                            </label>

                        ))}



                        {selectedOption && <div>
                            <label htmlFor="email" className="block  text-sm font-medium text-gray-900 text-start dark:text-gray-500">
                                {selectedOption?.title} Email Address
                            </label>
                            <div className="relative mb-6">


                                <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                                    <FaRegEnvelope className='text-xl text-gray-400' />
                                </div>
                                <input type="email" autoComplete="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    className={`bg-white border-2 p-4 ${errorss.email ? "border-red-500" : "border-gray-300"} text-gray-900 text-sm rounded-lg block w-full pl-10  `} placeholder="Email" />
                            </div>
                        </div>}
                        {/* <div className="relative mb-6">
                            <label htmlFor="password" className="sr-only">Password</label>

                            <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 cursor-pointer" onClick={() => setShow(!show)}>
                                {
                                    show ? <FaEyeSlash className='text-xl text-gray-400' /> :
                                        <FaEye className='text-xl text-gray-400' />


                                }

                            </div>
                            <input type={!show ? "password" : "text"}
                                onChange={(e) => setPassword(e.target.value)}
                                className={`bg-white border-2
                            p-4 ${errorss.password ? "border-red-500" : "border-gray-300"} text-gray-900 text-sm rounded-lg block w-full pl-10 `} placeholder="Enter password" autoComplete="new-password" />
                        </div> */}


                        <div className="">

                            <button type="submit"
                                disabled={loading ? true : false}
                                className="w-full mb-4 rounded-lg bg-slate-800 px-4 py-3
                             transition duration-300 transform active:scale-95 ease-in-out
                            text-sm font-medium text-white">

                                Next

                                {/* {loading ? <svg aria-hidden="true" role="status" className="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                                </svg> : "Next"} */}

                            </button>
                            <p className="text-sm text-gray-500">
                                No account? &nbsp;
                                <Link to={"/register"} className="text-yellow-500 font-bold" href>Sign up</Link>
                            </p>
                        </div>
                    </form>
                </div>
                <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2
                hidden md:block lg:block
                ">
                    <img alt="Welcome" src="/images/bg-login.png" className="absolute inset-0 h-full w-full object-cover" />
                </div>
            </section>

        </>
    );
}

export default Login;