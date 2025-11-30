import Footer from '@/components/Footer'
import React,{ useState } from 'react'
import { useNavigate } from 'react-router-dom'
import signup from "/src/assets/signup2.jpg";
import api from '@/api/axiosConfig';
import { useToast } from '@/context/ToastProvider';

function SellerSingupPage() {

    const toast = useToast();
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [phone, setPhone] = useState("");
    
    const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    
    const handleNameChange = (e) => {
        setName(e.target.value);
      };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
      };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
      };
    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
      };
    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
      };

      const handleSubmit = async (e) => {
          e.preventDefault();
      
          if (confirmPassword !== password) {
            toast.error("Password not match!");
            return;
          }
      
          if (!passwordRegex.test(password)) {
            toast.error(
              "Password must be at least 8 characters, contain uppercase, lowercase, digit, and special character!"
            );
            return;
          }
      
          try {
            const response = await api.post(`/auth/signup/seller`, {
              name,
              email,
              password,
              phone,
            });
      
            const { message } = response.data;
            toast.success(`${message}`);
          } catch (error) {
            if (error.response) {
              const { message } = error.response.data;
              toast.error(`${message}`);
            }
          } finally {
            setName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            setPhone("");
          }
        };

  return (
    <>
    <div>
        <p className='text-2xl font-semibold text-center py-8 font-poppins text-blue-700'>
            Create your seller account and launch your online business with ease
        </p>
    </div>
    <div className="flex items-center justify-evenly px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-white rounded-lg shadow-xl md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                  Create an account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                  <div>
                      <label 
                        htmlFor="name" 
                        className="block mb-2 text-sm font-medium text-gray-900">
                            Your name
                      </label>
                      <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" 
                        placeholder="name@company.com" 
                        value={name}
                        onChange={handleNameChange}
                        required/>
                  </div>
                  <div>
                      <label 
                        htmlFor="email" 
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Your email
                      </label>
                      <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" 
                        placeholder="name@company.com" 
                        value={email}
                        onChange={handleEmailChange}
                        required/>
                  </div>
                  <div>
                      <label 
                        htmlFor="email" 
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Your phone number
                      </label>
                      <input 
                        type="tel" 
                        name="phone" 
                        id="phone" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" 
                        placeholder="+91-865971658"
                        value={phone}
                        onChange={handlePhoneChange} 
                        required/>
                  </div>
                  <div>
                      <label 
                        htmlFor="password" 
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Password
                      </label>
                      <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        placeholder="••••••••"
                        value={password}
                        onChange={handlePasswordChange} 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" 
                        required/>
                  </div>
                  <div>
                      <label 
                        htmlFor="confirm-password" 
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Confirm password
                      </label>
                      <input 
                        type="confirm-password" 
                        name="confirm-password" 
                        id="confirm-password" 
                        placeholder="••••••••" 
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" 
                        required/>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full text-white bg-my-colour hover:bg-orange-400 focus:ring-4 transition-transform hover:scale-105 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                        Create an account
                  </button>
                  <p className="text-sm font-light text-gray-500">
                      Already have an account? 
                      <span 
                        className="font-medium text-blue-600 hover:underline pl-2 cursor-pointer"
                        onClick={()=> navigate("/seller")}>
                        Login here
                      </span>
                  </p>
              </form>
          </div>
      </div>
      <div>
        <img 
            src={signup} 
            alt="signup-image.jpg"
            className='h-100 mx-auto rounded-xl'/>
      </div>
  </div>
  <Footer/>
</>
  )
}

export default SellerSingupPage