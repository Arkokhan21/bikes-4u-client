import React, { useState, useContext } from 'react';
import { GoogleAuthProvider } from 'firebase/auth';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../context/AuthProvider';
import useToken from '../../hooks/useToken';

const Login = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || "/";

    const { login, googleLogin } = useContext(AuthContext)

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [loginError, setLoginError] = useState('')

    // get token from custom hook(useToken) - 
    const [loginUserEmail, setLoginUserEmail] = useState('')
    const [token] = useToken(loginUserEmail)

    if (token) {
        navigate(from, { replace: true });
    }

    const handleLogin = (data) => {
        console.log(data)
        setLoginError('')

        login(data.email, data.password)
            .then(result => {
                const user = result.user
                console.log(user)
                setLoginUserEmail(data.email)
            })
            .catch(err => {
                console.log(err.message)
                setLoginError(err.message)
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
                <form onSubmit={handleSubmit(handleLogin)} className="space-y-6">
                    <h5 className="text-xl font-medium">LOGIN</h5>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium">Your email</label>
                        <input type="email" {...register("email",
                            {
                                required: 'This is required.'
                            })}
                            className=" border text-sm rounded-lg  block w-full p-2.5 bg-gray-300 border-gray-400" placeholder="name@company.com" />
                        <p className='text-red-600'>{errors.email?.message}</p>
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium">Your password</label>
                        <input type="password" {...register("password",
                            {
                                required: 'This is required.',
                                minLength: { value: 6, message: 'Min Length is 6' }
                            })}
                            className="border text-sm rounded-lg block w-full p-2.5 bg-gray-300 border-gray-400" placeholder="••••••••" />
                        <p className='text-red-600'>{errors.password?.message}</p>
                    </div>
                    <span>{loginError && <p className='text-red-600'>{loginError}</p>}</span>
                    <button type="submit" className="w-full btn btn-primary text-white font-medium rounded-lg text-center">Login</button>
                    <div className="text-sm font-medium">
                        New to Bikes 4U? <Link to='/register' className="text-blue-500 hover:underline">Create new account</Link>
                    </div>
                </form>
                <div className="divider">OR</div>
                <button onClick={handleGoogleLogin} className='btn btn-outline btn-primary w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;