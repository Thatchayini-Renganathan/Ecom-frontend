import React, { useState } from 'react'
import signup from '/src/assets/signup.jpg'
import Footer from '@/components/Footer'
import {ToastContainer,toast} from 'react-toastify'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup() {

  const API_URL = import.meta.env.VITE_API_URL;

  const navigate = useNavigate();
  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[confirmPassword,setConfirmPassword]=useState("");
  const[phone,setPhone]=useState("");

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handleNameChange = (e) => {setName(e.target.value)};
  const handleEmailChange = (e) => {setEmail(e.target.value)};
  const handlePasswordChange = (e) => {setPassword(e.target.value)};
  const handleConfirmPasswordChange = (e) => {setConfirmPassword(e.target.value)};
  const handlePhoneChange = (e) => {setPhone(e.target.value)};
  
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
          const response = await axios.post(`${API_URL}/auth/signup/customer`,{
              name,
              email,
              password,
              phone
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
          setName("");
          setEmail("");
          setPassword("");
          setConfirmPassword("");
          setPhone("");
      }
  }

  return (
    <>
    <div className='flex bg-gray-100 justify-center min-h-screen'>
      <div className='bg-white w-120 h-120 mt-27 rounded-l-xl shadow-2xl'>
        <img src={signup} alt="signup logo" className='h-110 w-110 mx-auto my-5 rounded-2xl'/>
        </div>
      <div className='bg-black w-120 h-120 mt-27 rounded-r-2xl justify-items-center shadow-2xl'>
        <h3 className='font-poppins font-semibold mt-4 text-my-colour'>Sign up</h3>

        <form className=' text-center lg:text-start my-2 rounded-2xl w-100 h-106' onSubmit={handleSubmit}>

            <label className='signup-label'  htmlFor="name">Name</label>
            <input 
              className='my-form' 
              type="text" 
              id='name' 
              value={name}
              onChange={handleNameChange}
              placeholder='Name' 
              required/>

            <label className='signup-label' htmlFor="email">Email</label>
            <input 
              className='my-form' 
              type="email" 
              value={email}
              onChange={handleEmailChange}
              id='email' 
              placeholder='Email id' 
              required/>

            <label className='signup-label' htmlFor="Password">Password</label>
            <input 
              type='password' 
              className='my-form'
              value={password}
              onChange={handlePasswordChange} 
              id='password' 
              placeholder='Password' 
              required/>

            <label className='signup-label' htmlFor="ConfirmPassword">Confirm password</label>
            <input 
              type='password' 
              className='my-form'
              value={confirmPassword} 
              onChange={handleConfirmPasswordChange}
              id='confirmPassword' 
              placeholder='Confirm password' 
              required/>

            <label className='signup-label' htmlFor="phone">Phone</label>
            <input 
              className='my-form'  
              type="tel" 
              id='phone'
              value={phone}
              onChange={handlePhoneChange}
              placeholder='Phone number' 
              required/>

            <button 
            type='submit' 
            className="ml-10 mr-5 mt-5 rounded-2xl bg-my-colour w-25 h-10 font-semibold hover:bg-orange-400 transition-transform hover:scale-105">
            Sign up
            </button>

            <span className='text-my-colour pr-2'>already having account ?</span>
            <button
              onClick={() => navigate("/login")}
              className="text-white hover:underline"
            >
              login
            </button>

        </form>
        </div>
    </div>
    <Footer/>
    <div>
    <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
    </>
  )
}

export default Signup