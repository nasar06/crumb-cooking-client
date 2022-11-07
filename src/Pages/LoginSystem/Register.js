import React from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Register = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img style={{width: '600px'}} src='https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-232.jpg?w=2000'></img>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                    <h1 className="text-4xl font-bold">Register now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-lime-500 border-none">Register</button>
                        </div>
                        <p>Already you have an Account?<Link className='text-blue-700' to='/login'>pleace Login</Link></p>
                        <div className='flex justify-center items-center mt-3'>
                            <button className='border px-5 py-2 rounded-lg bg-orange-600 text-white flex items-center'><FaGoogle className='mr-2' /> Google</button>
                            <span className='text-slate-400'>-OR-</span>
                            <button className='border px-5 py-2 rounded-lg bg-black text-white flex items-center'><FaGithub className='mr-2' /> Github</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;