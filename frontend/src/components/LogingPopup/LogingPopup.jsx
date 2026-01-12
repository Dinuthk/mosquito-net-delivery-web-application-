import React, {  useContext, useState } from 'react'
import './LogingPopup.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import axios from "axios"
import { showSuccess, showError, showLoading, dismissToast } from '../../utils/toast'

const LogingPopup = ({setShowLogin}) => {

  const{url,setToken} = useContext(StoreContext)

  const [currState,setCurrState] = useState("Login")

  const [data,setData] = useState({
    name:"",
    email:"",
    password:""
  })

  const onChangeHandler = (event) =>{
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}))
  }

  const onLogin = async (event) =>{
    event.preventDefault();
    
    // Show loading toast
    const loadingToastId = showLoading(currState === "Login" ? "Logging in..." : "Creating account...");
    
    let newUrl = url;
    if(currState==="Login"){
      newUrl += "/api/user/login"
    }
    else{
      newUrl += "/api/user/register"
    }

    try {
      const response = await axios.post(newUrl,data);

      if(response.data.success){
        dismissToast(loadingToastId);
        showSuccess(currState === "Login" ? "Login successful!" : "Account created successfully!");
        setToken(response.data.token);
        localStorage.setItem("token",response.data.token)
        setShowLogin(false)
      }
      else{
        dismissToast(loadingToastId);
        showError(response.data.message)
      }
    } catch (error) {
      dismissToast(loadingToastId);
      showError(error.response?.data?.message || "Something went wrong. Please try again.")
    }
  }

  return (
    <div className='Loging-Popup'>
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">

          <h2>{currState}</h2>
          <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
          {currState==="Login"?<></>:<input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Your name' required />}
          
          <input name='email' onChange={onChangeHandler} value={data.email} type="text" placeholder='Your email' required />
          <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Password' required />
          
        </div>
        <button type='submit'>{currState=="Sign Up"?"Create account":"Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, i agree to the term of use & Privacy policy.</p>
        </div>
        {currState=="Login"
        ?<p>Create a new account?<span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
        :<p>Already have an account?<span onClick={()=>setCurrState("Login")}>Loging here</span></p>}

      </form>
    </div>
  )
}

export default LogingPopup