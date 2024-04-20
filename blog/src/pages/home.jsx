import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import blogpage from "../component/blogpage"

function Home(){

    const[blog,setblog]=useState([])

    const loadblog = async()=>{
        const response=await axios.post('http://localhost:4000/blog/home')

        const result=response.data
        console.log(result)

        setblog(result['data'])
    }

    const onButtonClick =()=>{
        loadblog()
    }
    
return (
    <div className="app">
        <header className="App-header">
            <div className="conatiner-fluid" style={{backgroundColor:'lightcoral,height:100'}}>
                <h1 className="center" style={{display:"flex",justifyContent:"center",alignItems:"center",height: 100}} > Sunbeams Blog</h1>
            </div>
        </header>
        <div className="row">
            <div style={{position:'absolute',marginTop:"20px"}}>
                <button onClick={onButtonClick} className="btn btn-success"> load blog</button>
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
                            <blogpage 
                            id = {bblog.blogid}
                            title = {bblog.title}
                            category = {bblog.category}
                            date = {bblog.data}/>
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