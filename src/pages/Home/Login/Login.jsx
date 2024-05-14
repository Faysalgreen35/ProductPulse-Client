import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FcGoogle } from "react-icons/fc";
// import { FaGithub } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import axios from "axios";


const Login = () => {
    const { signIn, signInwithGoogle } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    // const handleGoogleSignIn = () => {
    //     signInwithGoogle()
    //         .then(result => {
    //             console.log(result.user);
                

    //             toast.success("Logged in successfully!");
    //         })
    //         .catch(error => {
    //             console.error(error);
    //             toast.error("Failed to login. Please try again.");
    //         });
    // }

    // const handleGithubSignIn = () => {
    //     signInwithGithub()
    //         .then(result => {
    //             console.log(result.user);
    //             toast.success("Logged in successfully!");
    //         })
    //         .catch(error => {
    //             console.error('error: ', error);
    //             toast.error("Failed to login. Please try again.");
    //         });
    // }

    const handleGoogleSignIn = () => {
        signInwithGoogle()
            .then(result => {
                console.log(result.user);
                const user = { email: result.user.email }; // Extract user email from result
                axios.post(`${import.meta.env.VITE_API_URL}/jwt`, user, { withCredentials: true })
                    .then(res => {
                        console.log(res.data);
                        if (res.data.success) {
                            toast.success("Logged in successfully!");
                            navigate(location?.state ? location.state : '/');
                        }
                    })
                    .catch(error => {
                        console.error(error);
                        toast.error("Failed to login. Please try again.");
                    });
            })
            .catch(error => {
                console.error(error);
                toast.error("Failed to login. Please try again.");
            });
    };
    

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const { email, password } = data;
        signIn(email, password)
            .then(result => {
                console.log(result.user);
                const user = {email};
                axios.post(`${import.meta.env.VITE_API_URL}/jwt`, user,{withCredentials:true})
                .then(res => {
                    console.log(res.data)
                    if(res.data.succcess){
                navigate(location?.state ? location?.state : '/');
    
                    }
                })
                toast.success("Logged in successfully!");
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error);
                toast.error("Failed to login. Please try again.");
            });
    };

    // const  handleLogin = (event) =>{
    //     event.preventDefault(); 
    //     const email = event.target.email.value;
    //     const password = event.target.password.value;
    //     // console.log(name, email, password);

    //     signIn(email, password)
    //     .then(result =>{
    //         const loggedInUser = result.user;
    //         console.log(loggedInUser);
    //         const user = {email};
    //         // navigate(location?.state ? location?.state : '/');
    //         //get access token
    //         axios.post('https://car-genius-server-omega.vercel.app/jwt', user,{withCredentials:true})
    //         .then(res => {
    //             console.log(res.data)
    //             if(res.data.succcess){
    //         navigate(location?.state ? location?.state : '/');

    //             }
    //         })

    //     })
    //     .catch(error =>console.error(error));
    // }

    return (
        <div className="">
            <Helmet>
                <title>ProductPulse | Login Page</title>
            </Helmet>
            <ToastContainer />
            <div className="hero min-h-screen bg-base-200" style={{ backgroundImage: 'url(https://shorturl.at/bdBLW)' }}>
                <div className="hero-content flex-col  hero-overlay bg-opacity-30">
                    <h1 className="text-5xl text-white font-bold lg:px-64 "> Please Login </h1>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body px-4 dark:bg-gray-700 dark:text-white">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email" name="email" className="input input-bordered"
                                    {...register("email", { required: true })}
                                />
                                {errors.email && <span className='text-red-500'>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="Password" name="password" className="input input-bordered"
                                    {...register("password", { required: true })}
                                />
                                {errors.password && <span className='text-red-500'>This field is required</span>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <div className="flex justify-evenly">

                            <div>
                                <button  onClick={handleGoogleSignIn} className="bg-white flex items-center text-gray-700 dark:text-gray-300 justify-center gap-x-3 text-sm sm:text-base  dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-800 rounded-lg hover:bg-gray-100 duration-300 transition-colors border px-8 py-2.5">
                                <FcGoogle />
                                         
                                        

                                    <span>Sign in with Google</span>
                                </button>
                            </div>
                            {/* <p className="text-center"><button onClick={handleGoogleSignIn} className="btn text-5xl"><FcGoogle /></button></p>
                            <p className="text-center"><button onClick={handleGithubSignIn} className="btn  text-5xl "><FaGithub /></button></p> */}
                        </div>
                        <p className="p-4 text-center mt-3 text-black">Don not have account <Link className="text-blue-500 text-2xl" to='/register'>Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
