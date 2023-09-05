import { FaEye, FaRegEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <>

            <section className="relative flex flex-wrap lg:h-screen lg:items-center py-24 lg:py-0">
                <Link to={"/"} className="absolute top-10">
                    <img src="/logo/scHub_logo.png" alt="logo" />
                </Link>
                <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">

                    <form action className="mx-auto mb-0 mt-8 max-w-md space-y-4">
                        <div className="mx-auto max-w-lg text-center">
                            <h1 className="text-2xl font-bold sm:text-3xl">Welcome Back</h1>
                            {/* <p className="mt-4 text-gray-500">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla
                                eaque error neque ipsa culpa autem, at itaque nostrum!
                            </p> */}
                        </div>

                        <div className="relative mb-6">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                                <FaRegEnvelope className='text-xl text-gray-400' />
                            </div>
                            {/* dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white */}
                            <input type="email" className="bg-white border p-4 border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10  " placeholder="Email" />
                        </div>
                        <div className="relative mb-6">
                            <label htmlFor="password" className="sr-only">Password</label>

                            <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                                <FaEye className='text-xl text-gray-400' />
                            </div>
                            <input type="password" className="bg-white border 
                            p-4 border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10  " placeholder="Enter password" />
                        </div>


                        <div className="">

                            <button type="submit" className="block w-full mb-4 rounded-lg bg-slate-800 px-4 py-3
                             transition duration-300 transform active:scale-95 ease-in-out
                            text-sm font-medium text-white">
                                Sign in
                            </button>
                            <p className="text-sm text-gray-500">
                                No account? &nbsp;
                                <Link to={"/register"} className="text-yellow-500 font-bold" href>Sign up</Link>
                            </p>
                        </div>
                    </form>
                </div>
                <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
                    <img alt="Welcome" src="/images/bg-login.png" className="absolute inset-0 h-full w-full object-cover" />
                </div>
            </section>

        </>
    );
}

export default Login;