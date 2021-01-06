import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './SignUp.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import {userService} from '../../services'
const signupUserSchema = yup.object().shape({
    taiKhoan: yup.string().required("* Không được bỏ trống!"),
    matKhau: yup.string().required("* Không được bỏ trống!"),
    hoTen: yup.string().required("* Không được bỏ trống!"),
    email: yup.string().required("* Không được bỏ trống!").email("* Email không hợp lệ!"),
    soDT:yup.string().required("* Không được bỏ trống!").matches(/^[0-9]+$/),
    maNhom:yup.string().required("* Không được bỏ trống!")
})
export default class SignUp extends Component {
    _handleSubmit = values => {
        userService.signUp(values)
        .then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
    }
    render() {
        return (
            <div className="login-elearning">
                <div className="Form-Login signup">
                    <div className="login-form-title" >
                        <span className="text-login">SIGN UP</span>
                    </div>
                    <Formik
                        initialValues={{
                            taiKhoan: "",
                            matKhau: "",
                            hoTen: "",
                            email: "",
                            soDT: "",
                            maNhom: "GP01",

                        }}
                        validationSchema={signupUserSchema}
                        onSubmit={this._handleSubmit}
                        render={(formikProps) => (
                            <Form className="login-form">
                                <div className="form-label m-b-26">
                                    <span className="label-input">Tài Khoản</span>
                                    <Field className="input-1 " type="text" name="taiKhoan" onChange={formikProps.handleChange} placeholder="Enter Username" >
                             
                                    </Field>
                                    <ErrorMessage  name="taiKhoan" ></ErrorMessage>
                                    <span className="focus-input">
                                    </span>
                                   
                                </div>
                                <div className="form-label ">
                                    <span className="label-input">Password</span>
                                    <Field className="input-1" type="password" name="matKhau" onChange={formikProps.handleChange} placeholder="Enter Password" ></Field>
                                    <ErrorMessage name="matKhau" />
                                    <span className="focus-input">
                                    </span>
                                </div>
                                {/* <div className="form-label ">
                                    <span className="label-input">Confirm Password</span>
                                    <Field className="input-1" type="password" name="matKhau" onChange={formikProps.handleChange} placeholder="Enter Password" ></Field>
                                    <span className="focus-input">
                                    </span>
                                </div> */}
                                <div className="form-label m-b-26">
                                    <span className="label-input">Email</span>
                                    <Field className="input-1 " type="text" name="email" onChange={formikProps.handleChange} placeholder="Email Addess" ></Field>
                                    <ErrorMessage name="email" />
                                    <span className="focus-input">
                                    </span>
                                </div>
                                <div className="form-label m-b-26">
                                    <span className="label-input">Họ tên</span>
                                    <Field className="input-1 " type="text" name="hoTen" onChange={formikProps.handleChange} placeholder="Enter Username" ></Field>
                                    <ErrorMessage name="hoTen" />
                                    <span className="focus-input">
                                    </span>
                                </div>
                                <div className="form-label m-b-26">
                                    <span className="label-input">Số điện thoại</span>
                                    <Field className="input-1 " type="text" name="soDT" onChange={formikProps.handleChange} placeholder="Phone Number" ></Field>
                                    <ErrorMessage name="soDT" />
                                    <span className="focus-input">
                                    </span>
                                </div>
                                <div className="form-label m-b-26">
                                    <span className="label-input">Mã Nhóm</span>
                                    <Field className="form-control" component="select" name="maNhom" onChange={formikProps.handleChange}>
                                        <option>GP01</option>
                                        <option>GP02</option>
                                        <option>GP03</option>
                                        <option>GP04</option>
                                        <option>GP05</option>
                                        <option>GP06</option>
                                        <option>GP07</option>
                                        <option>GP08</option>
                                        <option>GP09</option>
                                        <option>GP10</option>

                                    </Field>
                                    <ErrorMessage name="maNhom" />
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


                            </Form>
                        )}
                    />


                </div>
            </div>
        )
    }
}
