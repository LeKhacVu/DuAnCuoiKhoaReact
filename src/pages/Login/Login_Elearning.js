import React from 'react'
import './Login_Elearning.css'

export default function Login_Elearning() {
    return (
        <div className="login-elearning">
            <div className="Form-Login">
                <div className="login-form-title" >
                    <span className="text-login">SIGN IN</span>
                </div>
                <form className="login-form">
                    <div className="form-label m-b-26">
                        <span className="label-input">Username</span>
                        <input className="input-1 " type="text" name="username" placeholder="Enter username" ></input>
                        <span className="focus-input">
                        </span>
                    </div>
                    <div className="form-label ">
                        <span className="label-input">Password</span>
                        <input className="input-1" type="password" name="username" placeholder="Enter password" ></input>
                        <span className="focus-input">
                        </span>
                    </div>
                    <div className="flex-checkbox">
                        <div className="contact100-form-checkbox">
                            <input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
                            <label className="label-checkbox100" htmlFor="ckb1">
                                Remember me
                        </label>
                        </div>
                        <div>
                            <a href="#" className="txt1">
                                Forgot Password?
                            </a>
                        </div>

                    </div>
                    <div className="container-login100-form-btn">
                        <button className="login100-form-btn">
                            Login
                         </button>
                    </div>


                </form>
            </div>
        </div>
    )
}
