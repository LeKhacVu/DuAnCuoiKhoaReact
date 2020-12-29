import React from 'react'
import { NavLink } from 'react-router-dom'
import './SignUp.css'
export default function SignUp() {
    return (
        <div className="login-elearning">
        <div className="Form-Login signup">
            <div className="login-form-title" >
                <span className="text-login">SIGN UP</span>
            </div>
            <form className="login-form">
                <div className="form-label m-b-26">
                    <span className="label-input">Username</span>
                    <input className="input-1 " type="text" name="username" placeholder="Enter Username" ></input>
                    <span className="focus-input">
                    </span>
                </div>
                <div className="form-label m-b-26">
                    <span className="label-input">Email</span>
                    <input className="input-1 " type="text" name="email" placeholder="Email Addess" ></input>
                    <span className="focus-input">
                    </span>
                </div>
                <div className="form-label ">
                    <span className="label-input">Password</span>
                    <input className="input-1" type="password" name="password" placeholder="Enter Password" ></input>
                    <span className="focus-input">
                    </span>
                </div>
                <div className="form-label ">
                    <span className="label-input">Repeat Password</span>
                    <input className="input-1" type="password" name="password" placeholder="Enter Password" ></input>
                    <span className="focus-input">
                    </span>
                </div>
                <div className="flex-checkbox">
                    <div className="contact100-form-checkbox">
                        <input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
                        <label className="label-checkbox100" htmlFor="ckb1">
                           I agree to the <b>Terms of User</b>
                    </label>
                    </div>
                    

                </div>
                <div className="container-login100-form-btn">
                    <button className="login100-form-btn">
                        Sign Up
                     </button>
                </div>
                <p className="p-2">Have already an account?<NavLink to='/login'>Login Here</NavLink></p>


            </form>
        </div>
    </div>
    )
}
