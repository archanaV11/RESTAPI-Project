import React, { useState } from 'react'
import Button from '@mui/material/Button';
import './Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() 
{

  const[emailid,setEmailid]=useState('');
  const[password,setPassword]=useState('');
  const navigate=useNavigate();
  
  const formHandler=(event)=>
  {
    const logindetails={emailid,password}
    axios.post("http://localhost:8080/loginpost",logindetails)
    navigate("/signup")
  }

  return (
    <div className='body1'>
    <div className='pic'>
    <img src="https://i.pinimg.com/736x/a8/1d/08/a81d08593411d2586a964ec936c85665.jpg" height="705px" width="1525px"></img></div>
    <div className='rectangle'></div>
    <div className='login'>
    <b>LOGIN</b></div> 

    <div className='form'>
    <form onSubmit={formHandler}>
    
    emailid:  <input type="text100" value={emailid} placeholder="EMAIL-ID" onChange={e=>setEmailid(e.target.value)}/><br/>
    
    <br/>
    password: <input type="password300" value={password} placeholder="PASSWORD" onChange={e=>setPassword(e.target.value)}/><br/>
    
    <br/>
    <h5><Button type="submit" class='but'>LOGIN</Button></h5>
    </form></div>
    </div>
    
  )
}
