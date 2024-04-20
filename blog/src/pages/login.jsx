import { useState } from "react";
import {Link, link,useNavigate} from 'react-router-dom'
import { login } from "../services/user";
import { toast } from "react-toastify";

function LoginUser(){
    //create state memb
const[email,setEmail]=useState('')
const[password,setPassword]=useState('')

//use navigate
const navigate= useNavigate()

const onLogin = async()=>{
    if (email.length === 0){
    toast.warning('enter email')
      
    }else if(password.length == 0){
      toast.warning('Enter Password')
    
    } else{
      //make the API call and receive the result
      const result = await login( email, password )
      if(result['status'] === 'success'){
        
        toast.success('Login user Successfully')
        navigate('/home')
      }else{
        toast.warning('login user failed')
      }
    }
}


  return (
    <div className="App">
      <header className="App-header">
      <div className="container" style={{backgroundColor:"lightblue",height:100,}}>
        <h1 className="center" style={{display:"flex",justifyContent:"center",alignItems:"center",height: 100}}>login page</h1>
      </div>
     
     <div className="row" >
      <div className="col"></div>
       
       <div className="col" style={{display:'flex',justifyContent:'center',marginTop:50}}>
        <div className="form">

          <div className="mb-3">
            <label htmlFor="">Email </label> <br />
            <input type="email" className="form-control"  onChange={(e)=>{
                setEmail(e.target.value)
            }}/>
          </div>
          
          <div className="mb-3">
            <label htmlFor="">Password</label> <br />
            <input type="password" className="form-control" onChange={(e)=>{
                setPassword(e.target.value)
            }}/>
          </div>

          <div className="mb-3">
          do you have an account yet {''}
          <Link to='/register'>register Here</Link>
          </div>

          <div>
            <button onClick={onLogin} type="button" class="btn-success" style={{height:30, width:100, marginTop:10}}>Login</button>
          </div>
        </div>
       </div>

      


     </div>
      
      </header>
    </div>
  );
}

export default LoginUser;