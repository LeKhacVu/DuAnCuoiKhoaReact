import React, { Component } from 'react'
import './Course_Detail.css'
import Axios from 'axios'
import {connect} from 'react-redux'
 class Course_Detail extends Component {
     render(){
    return (
        <div>
            <div className="background-detail">
            </div>
            <div className="container">
                <p className="textDetail display-4">Giới thiệu khóa học (Phần mô tả của khóa học)</p>
                
            </div>
        </div>
    )
    
}
componentDidMount(){
    Axios({
        method:"GET",
        url: 'https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=1'
    }).then((res)=>{
        this.props.dispatch({
            type:'CHI_TIET_KHOA_HOC',
            payload:res.data
        })
    }).catch((err)=>{
        console.log(err)
    })
}
}
const mapStateToProps = (state)=>({
    coursesDetail: state.courses.coursesDetail || {
        maKhoaHoc:"",
        tenKhoaHoc:"",
        hinhAnh:"",
        nguoiTao:{
            taiKhoan:"",
            hoTen:""
        }
    }
});
export default connect(mapStateToProps) (Course_Detail);