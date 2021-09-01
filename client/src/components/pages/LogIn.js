import React, {useState} from 'react';
import { NavLink, useHistory} from 'react-router-dom';
//import NavLog from '../NavLog';

const LogIn = () =>{
    

    const history = useHistory();

    const [email,setEmail]= useState('');
    const [password, setPassword]= useState('');

    const LoginUser = async (e) => {
        e.preventDefault();

        const res = await fetch('/signin', {
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        }); //of auth.js

        const data = res.json();
        {
            if(res.status === 400 || !data)
            {
                window.alert("Invalid credentials");
                history.push("/");
    
            }
            else 
            {
                window.alert("Login Successful");
                history.push("/home");
            }
        }
    }
    return (
        <>
          
            <div class="login-form">
                <form action="/examples/actions/confirmation.php" method="POST">
                    <h2 class="text-center">Log in</h2>
                    <div class="form-group">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">
                                    <span class="fa fa-paper-plane"></span>
                                </span>
                            </div>
                            <input type="email" class="form-control" name="email"  required="required"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="Email Address"
                            />
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">
                                    <i class="fa fa-lock"></i>
                                </span>
                            </div>
                            <input type="password" class="form-control" name="password" placeholder="Password" required="required" 
                               value={password}
                               onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-primary login-btn btn-block" onClick={LoginUser} >Log in</button>
                    </div>
                    <div class="clearfix">
                        <label class="float-left form-check-label"><input type="checkbox" /> Remember me</label>
                        <NavLink to="#" class="float-right">Forgot Password?</NavLink>
                    </div>
                    <div class="or-seperator"><i>or</i></div>
                    <p class="text-center">Login with your social media account</p>
                    <div class="text-center social-btn">
                        <NavLink to="/" class="btn btn-secondary"><i class="fa fa-facebook"></i>&nbsp; Facebook</NavLink>
                        <NavLink to="/" class="btn btn-info"><i class="fa fa-twitter"></i>&nbsp; Twitter</NavLink>
                        <NavLink to="/" class="btn btn-danger"><i class="fa fa-google"></i>&nbsp; Google</NavLink>
                    </div>
                </form>
                <p class="text-center text-muted small">Don't have an account? <NavLink to="/sign-up">Sign up here!</NavLink></p>
            </div>
        </>
    )
}

export default LogIn
