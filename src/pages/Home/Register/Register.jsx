import { Link, useLocation, useNavigate } from 'react-router-dom';
import {  useContext, useState } from 'react';
import { FaEye } from "react-icons/fa6";
// import { IoIosEyeOff } from "react-icons/io";
// import { AuthContext } from '../../providers/AuthProvider';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async'; 
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
import { IoIosEyeOff } from 'react-icons/io';
import { AuthContext } from '../../../providers/AuthProvider';

const Register = () => {
    const { creatUser } = useContext(AuthContext);
    const [registerError, setRegisterError] = useState('');
    const [succsess, setSuccsess] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const { email, password, name, photo } = data;

        if (email && password && name && photo) {
            setRegisterError('');
            setSuccsess('');

            // Check if password meets length requirement
            if (password.length < 6) {
                setRegisterError('Password should be at least 6 characters or longer');
                return;
            }

            // Check if password contains at least one uppercase letter
            if (!/[A-Z]/.test(password)) {
                setRegisterError('Password must contain at least one uppercase letter');
                return;
            }
            // Check if password contains at least one lowercase letter
            if (!/[a-z]/.test(password)) {
                setRegisterError('Password must contain at least one lowercase letter');
                return;
            }

            // If all conditions are met, proceed with user creation
            creatUser(email, password, name, photo)
                .then(result => {
                    console.log(result.user);
                    console.log(name);
                    
                    toast.success("User registered in successfully!");
                    navigate(location?.state ? location.state : '/register');
                    setSuccsess('User registered successfully!');  

                })
                .catch(error => {
                    console.error(error);
                    // Handle error messages appropriately
                    setRegisterError('Failed to register user. Please try again later.');
                    toast.error("Failed to login. Please try again.");
                });
        } else {
            console.error("Missing required form data");
            // Handle missing form data error if needed
            setRegisterError('Missing required form data. Please fill in all fields.');
        }
    };

    return (
        <div>
              <ToastContainer />
            <div className="hero min-h-screen bg-base-200" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
                <Helmet>
                    <title>ProductPulse   | Register Page</title>
                </Helmet>
                
                <div className="hero-content flex-col hero-overlay lg:flex-row-reverse bg-opacity-60 ">
                    <div>
                        <h1 className="text-5xl font-bold text-white lg:px-6 font-inter   ">Register now!</h1>
                    </div>

                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name="name" className="input input-bordered" {...register("name", { required: true })}/>
                                {errors.name && <span className='text-red-500'>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email" name="email" className="input input-bordered" {...register("email", { required: true })}/>
                                {errors.email && <span className='text-red-500'>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" placeholder="Photo Url" name="photo" className="input input-bordered" {...register("photo", { required: true })}/>
                                {errors.photo && <span className='text-red-500'>This field is required</span>}
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                            </div>
                            <div className="flex w-full">
                                <input type={showPassword ? "text" : "password"} placeholder="Password" name="password" className="input input-bordered md:px-16" {...register("password", { required: true })}/>
                                <span className="text-2xl text-black dark:text-black mt-4 -translate-x-7 " onClick={() => setShowPassword(!showPassword)}> {!showPassword ? <FaEye /> : <IoIosEyeOff />}</span>
                            </div>
                            {succsess && <p className="ml-12 text-center text-success mt-4 mb-3">{succsess}</p>}
                            {registerError && <p className="ml-12 text-center text-red-400 mt-2 mb-2">{registerError}</p>}
                            {errors.password && <span className='text-red-500'>This field is required</span>}
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        <p className="p-4 text-center text-black">Already have account? <Link className="text-blue-500" to='/login'>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
