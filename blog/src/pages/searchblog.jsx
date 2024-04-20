import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import blogpage from "../component/blogpage";

function search(){

    
return (
    <div className="app">
        <header className="App-header">
            <div className="conatiner" style={{backgroundColor:'lightblue,height:100'}}>
                <h1 className="center" style={{display:"flex",justifyContent:"center",alignItems:"center",height: 100}} > Sunbeams Blog</h1>
            </div>
        </header>
        <div className="row">
            <div style={{position:'absolute',marginTop:"20px"}}>
              <h3>hello</h3>
            <form action="form-inline my-2 my-lg-0" style={{float:"left"}}>
             <button className="btn btn-success">New Blog</button> <br />
             <button className="btn btn-success"> All Blog</button> <br />
             <button className="btn btn-success"> my Blog</button> <br />
             <button className="btn btn-success"> find Blog</button> <br />
             <button className="btn btn-success"> category</button><br />
            </form>

        </div>
        <div className="right" style={{display:"flex",justifyContent:"right",alignItems:"right"}}>
            <form action="form-inline my-2 my-lg-0">
            <button className="btn btn-success"> Search</button> <br />
            <input type="text" />
                <table style={{height:400,width:400,border:1, padding:50}}>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>blog title</th>
                            <th>category</th>
                            <th>date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* write code for search */}
                    </tbody>
                </table>
            </form>

            </div>
        </div>
    </div>
)
}



export default search