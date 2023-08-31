import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {toast} from "react-hot-toast";
import "./Css/Login.css"
import {AuthContext} from "..//Context/AuthContext"
import { useContext } from "react";

 const Login =() => {

    const router = useNavigate();

    const { state,dispatch } = useContext(AuthContext)
    console.log(state, "state from context into login componnt")

    const [userData, setUserData] = useState({ email: "", password: "" });

    const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (userData.email && userData.password) {
            try {
                const response = await axios.post('http://localhost:4000/api/v1/login', { 
                email:userData.email,
                password:userData.password
                })
                if (response.data.success) {
                    dispatch({
                        type: "Login",
                        payload: response.data.user
                    })
                    localStorage.setItem("batch2Token", JSON.stringify(response.data.token))
                    setUserData({ email: "", password: "" })
                    router('/homepage')
                    toast.success(response.data.message)
                }
            } catch (error) {
                if(!error.response.data.success)
                toast.error(error.response.data.message)
            }
        } else {
            toast.error("All fields are mandtory.")
        }
    }

  return(
 
    <div id="loginScreen">
                <div className="register-container">
                    <div className="left-register-content">
                        <div className="login-img">
                            <img src="//assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/1/25/f5e9a029-33c3-4a92-811b-ef7917fe6d441674670210687-offer-banner-300-600x240-code-_-MYNTRA300.jpg"
                                alt="" />
                        </div>

                        <form onSubmit={handleSubmit} >
                            <div className="login-title"> <a className="login-title" href="./sign-up.html"></a>
                                <span></span>
                                <a className="login-title2" >login</a>
                            </div>

                            <input type="email" name="email"  onChange={handleChange}  placeholder="enter email" autoComplete="off" /><br />
                            <input type="password" name="password"  onChange={handleChange}  placeholder="enter password"
                               /><br />
                            <p className="form-t-and-c">By continuing, I agree to <span className="t-c-style">Terms of Use</span> &
                                <span className="t-c-style">Privacy Policy</span></p>
                            <input type="submit" value="Sign In" className="sign-up-btn" />
                            <p className="form-t-and-c">New here?
                                <span className="t-c-style" style={{cursor:"pointer"}} onClick={()=> router('/register')}> Sign Up</span></p>
                        </form>
                    </div>
                </div>
            </div>
    )
}

export default Login;
    
