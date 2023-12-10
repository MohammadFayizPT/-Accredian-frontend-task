import React, { useState } from 'react';
import './CSS/Login.css'; 
import Usernamefield from '../Components/Usernamefield/Usernamefield';
import Passwordfield from '../Components/Passwordfield/Passwordfield';
import SubmitButton from '../Components/SubmitButton/SubmitButton';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const initialvalues = {
    username: '',
    password: ''
  }
  const [values, setValues] = useState(initialvalues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/login',values)
    .then(res => {
      if(res.data.Status === "Success") {
          alert('logged in successfully');
          navigate('/home');
      } else {
        alert(res.data.Error);
      }
    })
    .then(err => console.log(err));
  }
  return (
    <div className='login'>
      <div className='login-child'>
        <h1>Welcome Back</h1>
        <div className='login-div'>
          <h2>Login Here</h2>
          <form onSubmit={handleSubmit}>
            <Usernamefield
              name='username'
              value={values.username}
              onChange={handleChange}
            />
            <Passwordfield
              name='password'
              value={values.password}
              onChange={handleChange}
            />
            <SubmitButton type='submit' />
          </form>
          <div className='description'>
            <p>Don't have an account?</p>
            <Link to='/register'><p className='signup'>sign up</p></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
