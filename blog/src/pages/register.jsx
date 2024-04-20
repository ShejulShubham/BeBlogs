import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../services/user";
import { toast } from 'react-toastify'

function RegisterUser(){
  //create state members
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')

  //get hook to navigate
  const navigate = useNavigate()


  const onCancel= () =>{
    navigate('/login')
  }

  const onRegister = async () => {
    if(name.length === 0){
      toast.warning('Enter Name')
    }else if(email.length == 0){
      toast.warning('Enter Email')
    }else if(password.length == 0){
      toast.warning('Enter Password')
    }else if(phone.length == 0){
      toast.warning('Enter phone')
    } else{
      //make the API call and receive the result
      const result = await register(name, email, password, phone)
      if(result['status'] === 'success'){
        toast.success('Registered user Successfully')
        navigate('/login')
      }else{
        toast.warning('Register user failed')
      }
    }
  }
return (
    <div className="App">
      <header className="App-header">
      <div className="container" style={{backgroundColor:"lightblue",height:100,}}>
        <h1 className="center" style={{display:"flex",justifyContent:"center",alignItems:"center",height: 100}}>Register</h1>
      </div>
     
     <div className="row" >
      <div className="col"></div>
       
       <div className="col" style={{display:'flex',justifyContent:'center',marginTop:50}}>
        <div className="form">

          
          <div className="mb-3">
            <label htmlFor="">Name </label> <br />
            <input type="text" className="form-control" onChange={(e) => {
                    setName(e.target.value)
                  }}  />
          </div>


          <div className="mb-3">
            <label htmlFor="">Email </label> <br />
            <input type="email" className="form-control" onChange={(e) => {
                    setEmail(e.target.value)
                  }}/>
          </div>
          
          <div className="mb-3">
            <label htmlFor="">Password</label> <br />
            <input type="password" className="form-control" onChange={(e) => {
                    setPassword(e.target.value)
                  }}/>
          </div>

          <div className="mb-3">
            <label htmlFor="">Phone Number</label> <br />
            <input type="number" className="form-control"onChange={(e) => {
                    setPhone(e.target.value)
                  }}/>
          </div>

          <div className="mb-3" >
        already have an account ?
        <Link to='/login'>login here</Link>
           
          </div>

          <div>
            <button onClick={onRegister} type="button" class="btn-success" style={{height:30, width:100, marginTop:10, marginRight:5}}>Register</button>
          
          <button onClick={onCancel} type="button" class="btn-danger" style={{height:30, width:100, marginTop:10  }}>cancel</button>
          </div>

        </div>
       </div>

     </div>
      
      </header>
    </div>
  );
}

export default RegisterUser