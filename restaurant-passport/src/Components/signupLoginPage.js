import React from "react";
import LoginForm from "./login";
import SignupForm from "./signup";
const LoginPage = (props)=> {
    return(  
    <div>
        <h1>Signup</h1>
        <SignupForm/>
        <h1>Login</h1>
        <LoginForm {...props}/>
    </div>
      
    )};
  export default LoginPage;