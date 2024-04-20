import { Route, Routes } from "react-router-dom";
import './App.css'
import Home from "./pages/home";
import LoginUser from "./pages/login";
import RegisterUser from "./pages/register";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'


function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<LoginUser/>} />
        <Route path="/register" element={<RegisterUser/>} />
        <Route path="/login" element={<LoginUser/>} />
        <Route path="/home" element={<Home/>} />
      </Routes>
      <ToastContainer/>
    </div>
  )
}

export default App;
