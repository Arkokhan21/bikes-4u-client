import React, { useState, useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { GoogleAuthProvider } from 'firebase/auth';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider';

const Register = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || "/";

    const { createUser, updateUser, googleLogin } = useContext(AuthContext)

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [registerError, setRegisterError] = useState('')

    const handleRegister = (data) => {
        console.log(data)
        setRegisterError('')

        createUser(data.email, data.password)
            .then(result => {
                const user = result.user
                console.log(user)
                toast.success('Register Successfull')
                navigate(from, { replace: true });

                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => { })
                    .catch(err => console.log(err))
            })
            .catch(err => {
                console.error(err.message)
                setRegisterError(err.message)
            })
    }

    const googleProvider = new GoogleAuthProvider()

    const handleGoogleLogin = () => {
        googleLogin(googleProvider)
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='flex justify-center my-20'>
            <div className="p-4 w-full max-w-sm  rounded-lg border shadow-md sm:p-6 md:p-8 bg-gray-200 border-gray-400">
                <form onSubmit={handleSubmit(handleRegister)} className="space-y-6">
                    <h5 className="text-xl font-medium">REGISTER</h5>
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium">Your name</label>
                        <input type="text" {...register("name",
                            {
                                required: 'This is required.'
                            })}
                            className="border text-sm rounded-lg block w-full p-2.5 bg-gray-300 border-gray-400" placeholder="name" />
                        <p className='text-red-600'>{errors.name?.message}</p>
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium">Your email</label>
                        <input type="email" {...register("email",
                            {
                                required: 'This is required.'
                            })}
                            className="border text-sm rounded-lg  block w-full p-2.5 bg-gray-300 border-gray-400" placeholder="name@company.com" />
                        <p className='text-red-600'>{errors.email?.message}</p>
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium">Your password</label>
                        <input type="password" {...register("password",
                            {
                                required: 'This is required.',
                                minLength: { value: 6, message: 'Min Length is 6' }
                            })} placeholder="••••••••"
                            className="border text-sm rounded-lg block w-full p-2.5 bg-gray-300 border-gray-400" />
                        <p className='text-red-600'>{errors.password?.message}</p>
                    </div>
                    <span>{registerError && <p className='text-red-600'>{registerError}</p>}</span>
                    <button type="submit" className="w-full btn btn-primary text-white font-medium rounded-lg text-center">Register</button>
                    <div className="text-sm font-medium">
                        Already have an account? <Link to='/login' className="text-blue-500 hover:underline">Please Login</Link>
                    </div>
                </form>
                <div className="divider">OR</div>
                <button onClick={handleGoogleLogin} className='btn btn-outline btn-primary w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Register;