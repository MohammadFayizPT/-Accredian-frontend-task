import React, { useState } from 'react'
import './CSS/Register.css'
import Emailfield from '../Components/Emailfield/Emailfield'
import Usernamefield from '../Components/Usernamefield/Usernamefield'
import Passwordfield from '../Components/Passwordfield/Passwordfield'
import SubmitButton from '../Components/SubmitButton/SubmitButton'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const initialvalues = {
    name: '',
    email: '',
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
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/register',values)
    .then(res => {
      if(res.data.Status === "Success") {
          alert('signed up successfully');
          navigate('/');
      } else {
        alert('error');
      }
    })
    .then(err => console.log(err));
  }

  return (
    <div className='register'>
      <div className='register-child'>
            <h1>Welcome To Accredian</h1>
            <div className='register-div'>
              <h2>Signup Here</h2>
              <form onSubmit={handleSubmit}>
              <Usernamefield 
               name='username'
               value={values.username}
               onChange={handleChange}
              />
              <Emailfield
               name='email'
               value={values.email}
               onChange={handleChange}
              />
              <Passwordfield
               name='password'
               value={values.password}
               onChange={handleChange}
              />
              <SubmitButton type='submit'/>
              </form>
            </div>
        </div>
    </div>
  )
}

export default Register
