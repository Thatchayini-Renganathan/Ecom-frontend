import React, { useState } from 'react';
import Footer from '@/components/Footer';
import {ToastContainer,toast} from 'react-toastify';
import axios from 'axios';

function ForgotPassword() {

  const API_URL = import.meta.env.VITE_API_URL;

  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");
  const[confirmPassword,setConfirmPassword] = useState("");

  const handleEmailChange = (e) => {setEmail(e.target.value)};
  const handlePasswordChange = (e) => {setPassword(e.target.value)};
  const handleConfirmPasswordChange = (e) => {setConfirmPassword(e.target.value)};

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handleSubmit = async (e) => {
        e.preventDefault();
  
        if(confirmPassword!==password)
        {
          toast.error("Password not match!");
          return;
        }
  
        if(!passwordRegex.test(password))
        {
          toast.error("Password must be at least 8 characters, contain uppercase, lowercase, digit, and special character!")
          return;
        }
  
        try {
            const response = await axios.patch(`${API_URL}/auth/forgot-password`,{
                email,
                password
            });
            
            const {message} = response.data;
            toast.success(`${message}`);

        } catch (error) {
          if(error.response)
          {
          const{message} = error.response.data;
          toast.error(`${message}`);
          }
        }
        finally
        {
          setEmail("");
          setPassword("");
          setConfirmPassword("");
        }
    }

  return (
    <>
    <section class="bg-gray-50 dark:bg-gray-900">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div class="w-full p-6 bg-black rounded-lg shadow dark:border md:mt-0 sm:max-w-md sm:p-8">
          <h2 class="mb-1 text-xl font-bold leading-tight tracking-tight text-my-colour md:text-2xl">
              Change Password
          </h2>
          <p className='text-white text-sm'>Your new password must be different from previous used passwords.</p>
          <form class="mt-4 space-y-4 lg:mt-5 md:space-y-5" onSubmit={handleSubmit}>
              <div>
                  <label 
                    for="email" 
                    class="block mb-2 text-sm font-medium text-my-colour">
                    Your email
                  </label>
                  <input 
                    type="email" 
                    name="email" 
                    id="email"
                    value={email} 
                    onChange={handleEmailChange}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" 
                    placeholder="name@company.com" 
                    required/>
              </div>
              <div>
                  <label 
                    for="password" 
                    class="block mb-2 text-sm font-medium text-my-colour">
                    New Password
                  </label>
                  <input 
                    type="password" 
                    name="password" 
                    id="password"
                    value={password} 
                    onChange={handlePasswordChange}
                    placeholder="••••••••" 
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" 
                    required/>
              </div>
              <div>
                  <label 
                    for="confirm-password" 
                    class="block mb-2 text-sm font-medium text-my-colour">
                    Confirm password
                  </label>
                  <input 
                    type="password" 
                    name="confirm-password" 
                    id="confirm-password" 
                    placeholder="••••••••"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange} 
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" 
                    required/>
              </div>

              <button 
                type="submit" 
                class="w-full text-black bg-my-colour hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-transform hover:scale-102">
                Reset passwod
              </button>

          </form>
      </div>
  </div>
</section>
<Footer/>
<div>
  <ToastContainer position="bottom-right" autoClose={3000} />
</div>
</>
  )
}

export default ForgotPassword