import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Blogpage from "../component/blogpage";
import { Link, Navigate } from "react-router-dom";
import search from "./searchblog";

function Home(){

    const[blog,setblog]=useState([])

    const loadblog = async()=>{
        const response=await axios.post('http://localhost:4000/blog/home')

        const result=response.data
        console.log(result)

        setblog(result['data'])
    }
    const navigate = useNavigate()

    const onButtonClick =()=>{
        loadblog()
    }


    const onLogout= () =>{
        navigate('/login')
      }
    
return (
    <div className="app">
        <header className="App-header">
            <div className="conatiner-fluid" style={{backgroundColor:'lightcoral,height:100'}}>
                <h1 className="center" style={{display:"flex",justifyContent:"center",alignItems:"center",height: 100}} > Blog</h1>
            <button onClick={onLogout} className="btn btn-danger">Logout</button>
            
            </div>
        </header>
        <div>
        <div style={{position:'absolute',marginTop:"20px"}}>
              <h3>hello</h3>
            <form action="form-inline my-2 my-lg-0" style={{float:"left"}}>
             <button className="btn btn-success">New Blog</button> <br />
             <button className="btn btn-success"> All Blog</button> <br />
             <button className="btn btn-success"> my Blog</button> <br />
             <button className="btn btn-success"> find Blog</button> <br />
             <button className="btn btn-success"> category</button><br />
             <Link to='/searchBlog'>find blog</Link>
            </form> </div>
        </div>
        
        <div className="row">
                <div style={{display:"flex", justifyContent:"right", paddingRight:10}}>
                <button onClick={onButtonClick} className="btn btn-success" > load blog</button>
                </div>
            <div style={{ display:"flex",justifyContent:"center", marginTop:"20px"}}>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>blog title</th>
                            <th>category</th>
                            <th>date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {blog.map((bblog)=>{
                            return(
                            <Blogpage 
                            id = {bblog.blogid}
                            title = {bblog.blogtitle}
                            category = {bblog.cattitle}
                            date = {bblog.blogdate}/>
                            )
                        })}
                    </tbody>
                </table>


            </div>
        </div>
    </div>
)
}



export default Home