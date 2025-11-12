import React, { useContext } from 'react'
import { useState } from 'react';
import google from "/src/assets/google.png";
import { useNavigate } from "react-router-dom";
import {ToastContainer,toast} from 'react-toastify'
import Footer from '@/components/Footer';
import axios from 'axios';
import "react-toastify/dist/ReactToastify.css";
import { Loader2 } from "lucide-react";
import { AuthContext } from '@/context/AuthProvider';

function Login() {

    const API_URL = import.meta.env.VITE_API_URL;
    
    const navigate = useNavigate();
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    
    const handleEmailChange = (e) => { setEmail(e.target.value); }
    const handlePasswordChange = (e) => { setPassword(e.target.value); }
    const handleGoogleLogin = () => {window.location.href = `${API_URL}/oauth2/authorization/google`;}

    const { setIsAuthenticated,setUser} = useContext(AuthContext);

    const handleSubmit = async (e) =>
    {
        e.preventDefault();

        try {
            const response = await axios.post(`${API_URL}/auth/login`,{
                email: email,
                password: password,
                type: "jwt"
            },
            {withCredentials:true});
            
            const{name,userId,role,loggedIn}=response.data;
            setIsAuthenticated(loggedIn);
            setUser({name,userId,role});

            toast.success("Login successful!");

            setTimeout(()=>{
              setLoading(true);
            setTimeout(() => navigate("/"), 2000)
            },1000)

            } catch (error) {
              if(error.response)
              {
                const {message}=error.response.data;
                toast.error(`${message}`);
              }
            }
            finally{
            setEmail("");
            setPassword("");
            setLoading(false);
            }
    }
  return (
    <>
    {loading && (
        <div className="fixed inset-0 flex justify-center items-center z-50 backdrop-blur-sm bg-transparent">
          <Loader2 className="h-10 w-10 text-orange-400 animate-spin" />
        </div>
      )}
    <div className='bg-white flex items-center justify-center min-h-screen font-poppins'>

    <div className="bg-black shadow-md rounded-lg p-8 max-w-md w-full">
    <h2 className="text-3xl font-bold text-center text-my-colour mb-6">Login</h2>

    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
        <input 
            type="email" 
            id="email" 
            name="email"
            value={email}
            onChange={handleEmailChange} 
            placeholder='Enter email' required
            className="login-form" />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-white">Password</label>
        <input 
            type="password" 
            id="password" 
            name="password" 
            value={password}
            onChange={handlePasswordChange}
            placeholder='Enter password' required
            className="login-form" />
      </div>
      <p className="mt-2 text-left text-sm text-my-colour">
          <button
            onClick={() => navigate("/forgot-password")}
            className="text-white hover:underline"
          >
            Forgot password ?
          </button>
      </p>
      <button 
        type="submit" 
        className="w-full bg-my-colour text-black py-2 px-4 rounded hover:bg-orange-400 transition-transform hover:scale-102">
        Login
      </button>

    </form>

    <p className="mt-6 text-center text-sm text-my-colour">
          Don’t have an account?
          <button
            onClick={() => navigate("/signup")}
            className="text-white hover:underline pl-1"
          >
            Register
          </button>
    </p>

    <div className="mt-6 text-center text-white">Or login with</div>

    <div className="mt-4 flex flex-col gap-3">
      <button onClick={handleGoogleLogin}
        className="w-full bg-white flex items-center justify-center gap-2 border py-2 rounded hover:bg-gray-400">
        <img src={google} className="w-5 h-5" alt="Google logo"/>
        <span className="text-sm">Continue with Google</span>
      </button>
    </div>
  </div>
  </div>
  <Footer/>
  <div>
    <ToastContainer position="bottom-right" autoClose={3000} />
  </div>
    </>
  )
}

export default Login