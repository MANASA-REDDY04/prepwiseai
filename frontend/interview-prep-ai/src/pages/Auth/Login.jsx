import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Inputs/Input";
import { validateEmail } from "../../utils/helper";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS as apiPaths } from "../../utils/apiPaths";
import { UserContext } from "../../context/UserContext";
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";

const Login = ({ setCurrentPage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { updateUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!password) {
      setError("Please enter the password");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const loginUrl = apiPaths?.AUTH?.LOGIN || "/api/auth/login";
      const response = await axiosInstance.post(loginUrl, { email, password });
      const { token } = response.data;
      if (token) {
        localStorage.setItem("token", token);
        updateUser(response.data);
        navigate("/dashboard");
      }
    } catch (error) {
      if (error.response?.data?.message) {
        setError(error.response.data.message);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

const handleGoogleAuth = async (credentialResponse) => {
  try {
    const { credential } = credentialResponse;
    const decoded = jwt_decode(credential);
    console.log("Google Auth success:", decoded);

    // 🚀 Immediately navigate or close form here
    navigate("/dashboard"); 

    // Continue with backend call in background
    const response = await axiosInstance.post(
      "/api/auth/google",
      { credential }
    );

    const { token } = response.data;
    if (token) {
      localStorage.setItem("token", token); 
      updateUser(response.data);
    }
  } catch (err) {
    console.error("Google Auth error:", err);
    setError("Google sign-in failed. Please try again.");
  }
};


  return (
    <div className="w-[90vw] md:w-[33vw] p-7 flex flex-col justify-center">
      <h3 className="text-lg font-semibold text-black">Welcome Back</h3>
      <p className="text-xs text-slate-700 nt-[5px] mb-6">
        Please enter your details to log in
      </p>
      <form onSubmit={handleLogin}>
        <Input
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          label="Email Address"
          placeholder="jhon@example.com"
          type="text"
        />

        <Input
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          label="Password"
          placeholder="Min 8 Characters"
          type="password"
        />

        {error && <p className="text-red-500 text-xs pb-2.5">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className={`btn-primary cursor-pointer flex items-center justify-center gap-2 ${
            loading ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {loading && (
            <div
              className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"
              role="status"
            ></div>
          )}
          {loading ? "Logging in..." : "LOGIN"}
        </button>

        <p className="text-[13px] text-slate-800 mt-3">
          Don't have an account?{" "}
          <button
            className="font-medium text-primary underline cursor-pointer"
            onClick={() => {
              setCurrentPage("signup");
            }}
          >
            Sign Up
          </button>
        </p>
      </form>

      <hr className="my-4 border-gray-300" />

      <div className="flex flex-col items-center">


        <GoogleLogin
          onSuccess={handleGoogleAuth}
          onError={() => {
            setError("Google sign-in failed. Please try again.");
          }}
        />
      </div>
    </div>
  );
};

export default Login;



