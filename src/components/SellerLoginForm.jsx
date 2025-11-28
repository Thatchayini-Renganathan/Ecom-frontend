import React, { useState,useContext } from "react";
import { Card, CardTitle, CardHeader } from "@/components/ui/card";
import { IoCloseOutline } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { Loader2 } from "lucide-react";
import { AuthContext } from "@/context/AuthProvider";
import { useNavigate } from "react-router-dom";

function SellerLoginForm({ closeForm }) {

  const API_URL = import.meta.env.VITE_API_URL;

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEmailChange = (e) => {setEmail(e.target.value)};
  const handlePasswordChange = (e) => {setPassword(e.target.value);};

  const { setIsAuthenticated, setUser } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
          const response = await axios.post(
            `${API_URL}/auth/login`,
            {
              email: email,
              password: password,
              type: "jwt",
            },
            { withCredentials: true }
          );
    
          const { name, userId, role, loggedIn } = response.data;
          setIsAuthenticated(loggedIn);
          setUser({ name, userId, role });
    
          toast.success("Login successful!");
    
          setTimeout(() => {
            setLoading(true);
            setTimeout(() => navigate("/"), 2000);
          }, 1000);
        } catch (error) {
          if (error.response) {
            const { message } = error.response.data;
            toast.error(`${message}`);
          }
        } finally {
          setEmail("");
          setPassword("");
          setLoading(false);
        }
  };

  return (
    <>
    {loading && (
            <div className="fixed inset-0 flex justify-center items-center z-50 backdrop-blur-sm bg-transparent">
              <Loader2 className="h-10 w-10 text-orange-400 animate-spin" />
            </div>
    )}
    <div>
      <Card className="h-95 w-120 mx-auto">
        <CardHeader className="flex justify-between">
          <CardTitle className="mt-1 font-semibold">Login</CardTitle>
          <span onClick={closeForm}>
            <IoCloseOutline size={25} />
          </span>
        </CardHeader>
        <form onSubmit={handleSubmit} className="grid">
          <label htmlFor="email" className="ml-15 mb-2 font-semibold">
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter Email id"
            className="py-3 w-90 my-1 mx-auto rounded bg-gray-200 px-4 text-sm"
            required
          />
          <label htmlFor="password" className="ml-15 mb-2 font-semibold">
            Password
          </label>
          <input
            name="password"
            id="password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter Password"
            className="py-3 w-90 my-1 mx-auto rounded bg-gray-200 px-4 text-sm"
            required
          />
          <button
            type="submit"
            className="mx-auto my-3 rounded bg-my-colour w-90 h-10 font-semibold hover:bg-orange-400 transition-transform hover:scale-105"
          >
            Login
          </button>
        </form>
        <div className="flex gap-2 mx-auto">
          <p>Dont have an account?</p>
          <span className="hover:underline text-blue-700">Create account</span>
        </div>
      </Card>
    </div>
    <div>
        <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
    </>
  );
}

export default SellerLoginForm;
