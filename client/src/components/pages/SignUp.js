import React, { useState } from 'react';
import '../../Signup';
import '../../App';
//import 'bootstrap/dist/css/bootstrap.css';
import { NavLink, useHistory } from 'react-router-dom';
//import 
const SignUp = () => {

    const history = useHistory();

    const [user, setUser] = useState({ //usestate is used for update data
        name: "", email: "", phone: "", work: "", password: "", cpassword: ""
    });

    let name, value;
    const handleInputs = (e) => { // e is event
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value });
    }

    const PostData = async (e) => {  // this from register button
        e.preventDefault();

        const { name, email, phone, work, password, cpassword } = user;

        const res = await fetch("/register", {
            method: "POST",
            headers: {   //header is wrong headers is write this takes me 1 hr to figure out
                "Content-Type": "application/json"
            },
            body: JSON.stringify({  //json ko string mein convert krna kyunki server string samjhata hai

                name, 
                email, 
                phone, 
                work, 
                password, 
                cpassword

            })
        }); //this is from auth.js post command to return promise


        const data = await res.json();

        {

            if (res.status === 422 || !data) 
            {
                window.alert("Invalid Registration");
                console.log("Invalid Registeration");
            } 
            else 
            {
                window.alert("Registration Successsfully");
                console.log("Successfully registered");
    
                history.push("/");//if sig-up succeffully them go to page login 
            }
        }
    }
    return (
        <>
            <div class="signup-form">
                <form action="/examples/actions/confirmation.php" method="post" />
                <h2>Sign Up</h2>
                <p>Please fill in this form to create an account!</p>
                <hr />
                <div method="POST" class="form-group">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text">
                                <span class="fa fa-user"></span>
                            </span>
                        </div>
                        <input type="text" class="form-control" name="name" placeholder="Username" required="required"
                            value={user.name}
                            onChange={handleInputs}

                        />
                    </div>
                </div>
                <div class="form-group">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text">
                                <i class="fa fa-paper-plane"></i>
                            </span>
                        </div>
                        <input type="email" class="form-control" name="email" placeholder="Email Address" required="required"
                            value={user.email}
                            onChange={handleInputs}

                        />
                    </div>
                </div>
                <div class="form-group">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text">
                                <i class="fa fa-phone"></i>
                            </span>
                        </div>
                        <input type="number" class="form-control" name="phone" placeholder="Phone Number" required="required"
                            value={user.phone}
                            onChange={handleInputs}
                        />
                    </div>
                </div>
                <div class="form-group">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text">
                                <i class="fa fa-briefcase"></i>
                            </span>
                        </div>
                        <input type="text" class="form-control" name="work" placeholder="Your Profession" required="required"
                            value={user.work}
                            onChange={handleInputs}
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
                            value={user.password}
                            onChange={handleInputs} />
                    </div>
                </div>
                <div class="form-group">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text">
                                <i class="fa fa-lock"></i>
                                <i class="fa fa-check"></i>
                            </span>
                        </div>
                        <input type="password" class="form-control" name="cpassword" placeholder="Confirm Password" required="required"
                            value={user.cpassword}
                            onChange={handleInputs} />
                    </div>
                </div>
                <div class="form-group">
                    <label class="form-check-label"><input type="checkbox" required="required" /> I accept the <NavLink to="/sign-up">Terms of Use</NavLink> &amp; <NavLink to="/sign-up">Privacy Policy</NavLink></label>
                </div>
                <div class="form-group">
                    <button type="submit" class="btn btn-primary btn-lg" onClick={PostData} >Sign Up</button>
                </div>

                <div class="text-center">Already have an account? <NavLink to="/">Login here</NavLink></div>

            </div>

        </>
    )
}

export default SignUp
