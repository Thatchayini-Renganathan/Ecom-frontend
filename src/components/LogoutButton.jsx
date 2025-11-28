import { AuthContext } from '@/context/AuthProvider'
import axios from 'axios';
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import {ToastContainer,toast} from 'react-toastify'

function LogoutButton() {

  const API_URL = import.meta.env.VITE_API_URL;

  const{setIsAuthenticated,setUser} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () =>{
        try {
          const resp = await axios.post(
            `${API_URL}/auth/logout`,
            {},
            { withCredentials:true}
          );

          console.log(resp);
          
          const message = resp.data.message || "Logged out successfully";
          console.log(message);
          
          setIsAuthenticated(false);
          setUser(null);
          console.log("before toast notify");
          
          toast.info("logged out");
          console.log("after toast notify");

          setTimeout(()=> {navigate("/")},5000);
        } catch (error) {
          toast.error(error.message);
        }
      };
  
  return (
    <>
    <div>
      <p 
        onClick={handleLogout} 
        className='hover:text-red-500'
      >
        Logout
      </p>
    </div>
    <div>
      <ToastContainer position="bottom-right" autoClose={2000}/>
    </div>
  </>
  )
}

export default LogoutButton