import React, { useState } from 'react'
import './Details.css';
import axios from 'axios';
export default function Details() 
{
  const[name,setName]=useState('');
  const[age,setAge]=useState('');
  const[phno,setPhno]=useState('');
  const[gender,setGender]=useState('');
  const[problem,setProblem]=useState('');
  const patientdetails={name,age,phno,gender,problem}
  
  
  const formHandler=(event)=>
  {
    axios.post("http://localhost:8080/patientpost",patientdetails)
  }

  return (
    <div>
    <div className='img3'>
    <img src="https://www.bhmpics.com/downloads/hospital-background/1.long-hospital-corridor-with-empty-seats_117023-1679.jpg"height="750px" width="1500px"></img>
    </div>
    <div className='rectangle3'></div>
    <div className='form3'>
    <form onSubmit={formHandler}>

    name &nbsp;&nbsp;: <input type="text600" value={name} placeholder="name..." onChange={e=>setName(e.target.value)}/><br/><br/>

    age &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <input type="text700" value={age} placeholder="age..." onChange={e=>setAge(e.target.value)}/><br/><br/>

    phno : <input type="text800" value={phno} placeholder="phoneno..." onChange={e=>setPhno(e.target.value)}/><br/><br/>

    gender: <input type="text900" value={gender} placeholder="gender..." onChange={e=>setGender(e.target.value)}/><br/><br/>
    
    problem : <input type="text1000" value={problem} placeholder="problem..." onChange={e=>setProblem(e.target.value)}/><br/><br/>

      <button type="submit" class="but3">Submit</button>
    </form>
    </div>
    </div>
  )
}
