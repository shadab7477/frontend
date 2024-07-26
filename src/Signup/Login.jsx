import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './signup.css';

import toast, { Toaster } from 'react-hot-toast';

import { login } from '../auth';

// import { useAuth } from './AuthContext';

import {useAuth} from "../Authcontext"
const Login = () => {
    // const history = useHistory();

    const {token,saveToken}=useAuth()

    const initial = {
        email: '',
        password: ''
    };
const navigate = useNavigate(); // Initialize the useNavigate hook

// const [token, setToken] = useState('');
    const [data, setData] = useState(initial);

console.log(token)
    const handleValueChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        });
    };
    const { login } = useAuth();
    const submit = async () => {

    // if (username === 'admin' && password === 'password') {


        try {

            if(data.email === 'admin' && data.password === 'password'){
            if (login(data.email, data.password)) {
                navigate('/admin');
              } else {
                alert('Invalid credentials');
              }
            }else{

                const res=  await axios.post('http://localhost:9000/login', data);
          saveToken(res.data.token);   
          toast.success('Signup successfull');
          //   alert(res.data.token);
              setData(initial); // Reset form data
           
    setTimeout(() => {
      navigate('/');
    }, 1000); // Navigate after 1 second
  
            }



          
        } catch (e) {
            console.log(e);
        }
    };

    return (
    <div>
      
      <div className="main1">
      <Toaster
  position="top-center"
  reverseOrder={false}
/>
            <div className="signupbox text-center">
                <h2>Login</h2>

                <div className="form-floating my-3">
                    <input
                        type="email"
                        onChange={handleValueChange}
                        className="form-control"
                        name="email"
                        id="floatingInput"
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
                        id="floatingPassword"
                        placeholder="Password"
                        value={data.password}
                    />
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                
                <div className="row pt-3 ">
                    <h6>Don't have an account ? <Link to={'/signup'} >Signup</Link> </h6>
                </div>
                <button onClick={submit} className="btn signupbtn mt-1 ">
                    Signup
                </button>
            </div>
        </div>

    </div>
  )
}

export default Login
