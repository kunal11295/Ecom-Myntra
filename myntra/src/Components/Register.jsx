import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import {toast}  from "react-hot-toast";
import "./Css/Register.css"


const Register = () =>
 {
    const [userData,setuserData] = useState({name:"",email:"",password:"",confirmpassword:""});
    const router = useNavigate()
    console.log(userData,"userData");

    const handleChange = (event) =>
    {
        setuserData({...userData,[event.target.name]:event.target.value})
    }

    const handleSubmit = async (event) =>
    {
        event.preventDefault();
        if(userData.name && userData.email && userData.password && userData.confirmpassword)
        {
                try{
                    const response = await axios.post("http://localhost:4000/api/v1/register",{
                    name:userData.name, 
                    email:userData.email,
                    password:userData.password,
                    confirmpassword:userData.confirmpassword
                    })
                    if(response.data.success)
                    {
                       router('/login')
                        toast.success(response.data.message)
                    }
                }catch(error)
                {
                    if(!error.response.data.success)
                    toast.error(error.response.data.message)
                }
        }else{
            toast.error("All field are mandatory")
        }
    }
 
  return (

    <div id="loginScreen">
    <div className="register-container">
        <div className="left-register-content">
            <div className="login-img">
                <img src="//assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/1/25/f5e9a029-33c3-4a92-811b-ef7917fe6d441674670210687-offer-banner-300-600x240-code-_-MYNTRA300.jpg"
                    alt="" />
            </div>

            <form method="post" onSubmit={handleSubmit} >
                <div className="login-title"> <a className="login-title" href="./sign-up.html">Sign Up</a>
                </div>
                <input type="text" name="name" onChange={handleChange} placeholder="enter username" autoComplete="off" />
                <input type="email" name="email" onChange={handleChange} placeholder="enter email" autoComplete="off" /><br />
                <input type="password" name="password" onChange={handleChange} placeholder="enter password"
                /><br />
                <input type="password" name="confirmpassword" onChange={handleChange} placeholder="confirm password"
                /><br />
                <p className="form-t-and-c">By continuing, I agree to <span className="t-c-style">Terms of Use</span> &
                    <span className="t-c-style">Privacy Policy</span></p>
                <input type="submit" value="Sign Up" className="sign-up-btn" />
                <p className="form-t-and-c">Already have account?
                    <span className="t-c-style" style={{cursor:"pointer"}} onClick={()=> router('/login')}> Sign In</span></p>
            </form>
        </div>
    </div>
</div>
)
}


export default Register
