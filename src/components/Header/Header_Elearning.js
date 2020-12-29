import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header_Elearning.css'

export default function Header_Elearning() {
    return (
        <div className="hr">
            
            <header className="header_content">
                <nav className="navbar navbar-expand-lg navbar-light ">
                    <div className="col-sm-10 col-md-8 col-lg-9 col-xl-7">
                        <div className="header__left">
                            <NavLink className="navbar-brand" to="/trangchu">
                                <img src="../img/logocybersoft.png" /> CYBERSOFT
                            </NavLink>

                            <span className="categories"><i className="fa fa-th" /><NavLink to="/profile" className="deleteText" style={{color: '#3E1311'}}>Danh mục khóa học</NavLink></span>
                            <form className="header__form">
                                <div className="input-group ">
                                    <input type="text" className="form-control" placeholder="Search for anything" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <div className="input-group-append">
                                        <span className="input-group-text" id="basic-addon2"><i className="fa fa-search" /></span>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-sm-2 col-md-4 col-lg-3 col-xl-5">
                        <div className="header__right">
                            <ul className="navbar-nav">
                                <li class="nav-item business">
                                    <a class="nav-link" href="https://cybersoft.edu.vn/blog/" target="_blank">Bài viết </a>
                                </li>
                                <li class="nav-item teach">
                                    <a class="nav-link" href="https://cyberlearn.vn/" target="_blank">Học online với cyberlearn.vn</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><i className="fa fa-shopping-cart" /></a>
                                </li>
                                <li className="nav-item btn-groups">
                                    <NavLink to="/login" className="ude-btnWhite">Log In</NavLink>
                                    <NavLink to="/signup" className="ude-btnRed">Sign Up</NavLink>
                                </li>
                            </ul></div>
                    </div>
                </nav>
            </header>

        </div>
    )
}
