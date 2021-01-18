import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Login_Elearning.css'
import {Formik,Form, Field} from 'formik'
import {connect} from 'react-redux'
import { dangNhap } from '../../redux/actions/QuanLyDangNhapAction'

 class Login_Elearning extends Component {
   render (){
    return (
        <div className="login-elearning">
            <div className="Form-Login">
                <div className="login-form-title" >
                    <span className="text-login">SIGN IN</span>
                </div>
                <Formik
                initialValues={{
                    taiKhoan:"",
                    matKhau:""
                }}
                onSubmit={(values)=>{
                    this.props.dispatch(dangNhap(values))
                }}
                render={({handleChange})=>(
                    <Form className="login-form">
                    <div className="form-label m-b-26">
                        <span className="label-input">Username</span>
                        <Field className="input-1 " type="text" name="taiKhoan" onChange={handleChange} placeholder="Enter username" ></Field>
                        <span className="focus-input">
                        </span>
                    </div>
                    <div className="form-label ">
                        <span className="label-input">Password</span>
                        <Field className="input-1" type="password" name="matKhau" onChange={handleChange} placeholder="Enter password" ></Field>
                        <span className="focus-input">
                        </span>
                    </div>
                    <div className="flex-checkbox">
                        <div className="contact100-form-checkbox">
                            <Field className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
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
                        <button type="submit" className="login100-form-btn">
                            Login
                         </button>
                        
                    </div>
                    <NavLink to="/signup" style={{cursor:'pointer'}} className="mt-5">Create your Account<span><i class="fa fa-arrow-right ml-2"></i></span></NavLink>


                </Form>
                )}
                />
               
            </div>
        </div>
    )
}
}
export default connect() (Login_Elearning);