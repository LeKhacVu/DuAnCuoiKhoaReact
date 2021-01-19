import React from 'react';

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
function App() {
  return (
    <BrowserRouter>
      <Header_Elearning />
      {/* <Home abc="123"/> */}
      <Switch>
       
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/course/:courseId' component={Course_Detail} />
        <Route exact path='/login' component={Login_Elearning} />
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/thongtintaikhoan' component={ThongTinTaiKhoan}/>
        {/* <Route exact path='/detail/:id' component={Detail_Elearning} /> */}
        <Route exact path='/detail' component={Detail_Elearning} />
      
        
        <Route exact path='/trangchu' component={TrangChu_Elearning} />
        <Route exact path='/profile/:id' component={Profile_Elearning}/>
        <Route exact path='/' component={TrangChu_Elearning} />
        <Route exact path='*' component={PageNotFound} />
      </Switch>
      <Footer_Elearning/>
    </BrowserRouter>
  );
}

export default App;
