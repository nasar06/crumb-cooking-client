import React from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img style={{width: '600px'}} src='https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-232.jpg?w=2000'></img>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                    <h1 className="text-4xl font-bold">Login now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-lime-500 border-none">Login</button>
                        </div>
                        <p>you have an no Account?<Link className='text-blue-700' to='/register'>pleace Register</Link></p>
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

export default Login;