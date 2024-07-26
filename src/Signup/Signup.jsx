import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './signup.css';

import { Link } from 'react-router-dom';
import {useAuth} from "../Authcontext"
import toast, { Toaster } from 'react-hot-toast';

const Signup = () => {

    const {saveToken}=useAuth()

    const initial = {
        name: '',
        email: '',
        password: ''
    };
const navigate = useNavigate(); // Initialize the useNavigate hook

// const [token, setToken] = useState('');
    const [data, setData] = useState(initial);
    const [otp, setOtp] = useState('');

  const [otptoken, setToken] = useState('');
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

console.log(data);

    const handleValueChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        });
    };

    const handleOtpChange = (e) => {
        setOtp(e.target.value);
      };
    
    
// send otp
      const submitSignup = async () => {
        try {
          const response= await axios.post('http://localhost:9000/first', data);
          setToken(response.data.otptoken); // Save the token
         
          toast.success('OTP sent to your email');
          setStep(2);
        } catch (e) {
          toast.error('Error during signup');
        }
      };
    

const verifyOtp = async () => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:9000/verify-otp', {  otp,otptoken });

      toast.success("Welcome");
    //   saveToken(token)
      console.log(response)
    localStorage.setItem('token', response.data.token);

      navigate('/');
    } catch (error) {
      // Safely handle and display error message
      const errorMessage = error.response?.data?.error || error.message;
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };
    return (
        <>
        
    <div className="main1">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="signupbox text-center">
        {step === 1 ? (
          <>
            <h2>Signup</h2>
            <div className="form-floating my-3">
              <input
                type="text"
                onChange={handleValueChange}
                className="form-control"
                name="name"
                placeholder="xyz"
                value={data.name}
              />
              <label htmlFor="floatingInput">User Name</label>
            </div>
            <div className="form-floating my-3">
              <input
                type="email"
                onChange={handleValueChange}
                className="form-control"
                name="email"
                placeholder="name@example.com"
                value={data.email}
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                onChange={handleValueChange}
                name="password"
                className="form-control"
                placeholder="Password"
                value={data.password}
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="row pt-3">
              <h6>
                Already have an account? <Link to={'/login'}>Login</Link>
              </h6>
            </div>
            <button onClick={submitSignup} className="btn signupbtn">
              Signup
            </button>
          </>
        ) : (
          <>
            <h2>Enter OTP</h2>
            <div className="form-floating my-3">
              <input
                type="text"
                onChange={handleOtpChange}
                className="form-control"
                name="otp"
                placeholder="Enter OTP"
                value={otp}
              />
              <label htmlFor="floatingInput">OTP</label>
            </div>
            <button onClick={verifyOtp} className="btn btn-dark px-5 verify-otp-btn" disabled={loading}>
          {loading ? 'Verifying...' : 'Verify OTP'}
        </button>
          </>
        )}
      </div>
    </div>
        
        </>
    );
};

export default Signup;
