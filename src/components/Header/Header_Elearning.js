import React, { Component, Fragment } from 'react'
import { Link, NavLink, Redirect } from 'react-router-dom'
import './Header_Elearning.css';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';

class Header_Elearning extends Component {

    state = {
        navigate: false,
        search:'',

    };
   

    logout = () => {
        localStorage.clear("token");
        this.setState({ navigate: true });
    }

    handleChangeValue= (event) =>{
       let {name,value} =event.target;
        this.setState({
            [name]:value
        },()=>{
            console.log(this.state)
        })
    }
    handleSubmit=()=>{
        if(this.handleChangeValue.value==='front end'){
            alert('thành công')
        }
    }

    render() {
        const { navigate } = this.state;

        if(navigate){
            return <Redirect to="/login" push={true} />
        }


        return (
            <div className="hr">

                <header className="header_content">
                    <nav className="navbar navbar-expand-lg navbar-light ">
                        <div className="col-sm-10 col-md-8 col-lg-9 col-xl-7">
                            <div className="header__left">
                                <NavLink className="navbar-brand" to="/home">
                                    <img src="../img/logocybersoft.png" /> CYBERSOFT
                            </NavLink>

                                <span className="categories">
                                    <div class="dropdown">
                                        <button className=" dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{verticalAlign: 'super'}}>
                                            <i className="fa fa-th" /><NavLink to="/profile" className="deleteText" style={{ color: '#3E1311' }}>Danh mục khóa học</NavLink>
                                        </button>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <NavLink to="/profile/Tuduy" className="dropdown-item" >Tư duy lập trình</NavLink>
                                            <NavLink to="/profile/Frontend" className="dropdown-item" >Front-End</NavLink>
                                            <NavLink to="/profile/Backend" className="dropdown-item" >Back-End</NavLink>
                                            <NavLink to="/profile/Fullstack" className="dropdown-item" >Full Stack</NavLink>
                                            <NavLink to="/profile/" className="dropdown-item" >Thiết kế web</NavLink>
                                            <NavLink to="/profile/Didong" className="dropdown-item" >Lập trình di động</NavLink>

                                        </div>
                                    </div>
                                </span>
                                <form className="header__form">
                                    <div className="input-group ">
                                        <input name="search" type="text" className="form-control" placeholder="Search for anything" aria-label="Recipient's username" aria-describedby="basic-addon2" 
                                         onChange={this.handleChangeValue}
                                         onSubmit={this.handleSubmit}
                                        
                                        />
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

                                    <li className="nav-item business">
                                        <a className="nav-link" href="https://cybersoft.edu.vn/blog/" target="_blank" style={{verticalAlign: 'super'}}>Bài viết </a>
                                    </li>
                                    <li className="nav-item teach">
                                        <a className="nav-link" href="https://cyberlearn.vn/" target="_blank" style={{verticalAlign: 'super'}}>Học online với cyberlearn.vn</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#"><i className="fa fa-shopping-cart" /></a>
                                    </li>

                                    {this.props.credentials ? (<li className="nav-item">
                                        <div className="dropdown" >
                                            <button className="nav-link dropdown-toggle" ><i className="fas fa-user-circle styleAvatarUser"></i>{this.props.credentials.hoTen} </button>
                                            <div className="dropdown-content" >
                                                <a href="/user">Thông tin tài khoản</a>
                                                <a href="/login" onClick={this.logout}>Đăng xuất</a>
                                            </div>
                                        </div>

                                    </li>

                                    ) : (
                                            <>
                                                <li className="nav-item btn-groups mt-2" >
                                                    <NavLink to="/login" className="ude-btnWhite">Log In</NavLink>
                                                    <NavLink to="/signup" className="ude-btnRed">Sign Up</NavLink>
                                                </li>
                                            </>
                                        )}



                                </ul></div>
                        </div>
                    </nav>
                </header>

            </div>
        )

    }


}


const mapStateToProps = (state) => {
    return {
        credentials: state.user.credentials
    }
}
export default connect(mapStateToProps)(Header_Elearning);
