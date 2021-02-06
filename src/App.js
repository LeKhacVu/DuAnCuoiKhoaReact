import React, { Component } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Contact from './pages/Contact/Contact';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import Header_Elearning from './components/Header/Header_Elearning';
import Footer_Elearning from './components/Footer/Footer_Elearning';
import TrangChu_Elearning from './pages/TrangChu/TrangChu_Elearning';
import Profile_Elearning from './pages/Profile/Profile_Elearning';
import Detail_Elearning from './pages/Detail/Detail_Elearning';
import Course_Detail from './pages/Course_Detail/Course_Detail';
import SignUp from './pages/SignUp/SignUp';
import Login_Elearning from './pages/Login/Login_Elearning';
import ThongTinTaiKhoan from './pages/ThongTinTaiKhoan/ThongTinTaiKhoan';
import {connect} from 'react-redux';
import { createAction } from './redux/actions';
import { DANG_NHAP } from './redux/constants/QuanLyKhoaHocConstant';
import { AdminTemplate } from './templates/AdminTemplate';
import CoursesManager from './pages/Admin/CoursesManager/CoursesManager';
import UserManager from './pages/Admin/UsersManager/UserManager';
import { HomeTemplate } from './templates/HomeTemplate';
import ThemKhoaHoc from './pages/Admin/CoursesManager/ThemKhoaHoc';
import ThemNguoiDung from './pages/Admin/UsersManager/ThemNguoiDung';
class App extends Component {
  render() {
    return (
      <BrowserRouter>       
        {/* <Home abc="123"/> */}
        <Switch>
          <HomeTemplate exact path='/course/:courseId' Component={Course_Detail} />
          <HomeTemplate exact path='/login' Component={Login_Elearning} />
          <HomeTemplate exact path='/signup' Component={SignUp} />
          <HomeTemplate exact path='/user' Component={ThongTinTaiKhoan} />
          {/* <Route exact path='/detail/:id' component={Detail_Elearning} /> */}
          <HomeTemplate exact path='/detail' Component={Detail_Elearning} />
          <HomeTemplate exact path='/home' Component={TrangChu_Elearning} />
          <HomeTemplate exact path='/profile/:id' Component={Profile_Elearning} />
          <HomeTemplate exact path='/' Component={TrangChu_Elearning} />
          <AdminTemplate exact path='/admin/courses' Component={CoursesManager}/>
          <AdminTemplate exact path='/admin/courses/themKhoaHoc' Component={ThemKhoaHoc}/>
          <AdminTemplate exact path='/admin/users/themNguoiDung' Component={ThemNguoiDung}/>
          <AdminTemplate exact path='/admin/users' Component={UserManager}/>
          <Route exact path='*' component={PageNotFound} />
        </Switch>
       
      </BrowserRouter>
    );
  }
  _getCredentialFromLocal = ()=>{
    const credentialsUser = localStorage.getItem('credentials');
    if(credentialsUser){
      this.props.dispatch(createAction(DANG_NHAP, JSON.parse(credentialsUser)))
    }
  }
  componentDidMount(){
    this._getCredentialFromLocal()
  }

}


export default connect() (App);
