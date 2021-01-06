import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Course_Item from '../Cousre_Item/Course_Item'
import './Profile_Elearning.css'
import { connect } from 'react-redux'
import Axios from 'axios'

class Profile_Elearning extends Component {
    render() {

        return (
            <div>
                <div className="profile">
                    <div className="container">
                        <h3 className="title-profile ">LẬP TRÌNH FRONT-END</h3>
                    </div>

                </div>
                <div className="course-special">
                    <div className="container">
                        <h4 >Các khóa học phổ biến</h4>
                    </div>
                </div>
                <div className="courses_item container">
                    <div className="rowCourse">
                        {this.props.coursesCategory.map((item,index)=>(
                            <Course_Item item={item} />
                        ))}
                    </div>
                </div>
            </div>

        )
    }
    componentDidMount(){
        Axios({
            method:'GET',
            url:'https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=FrontEnd&MaNhom=GP01'
        }).then((res)=>{
           this.props.dispatch({
               type:'DANH_MUC_KHOA_HOC',
               payload:res.data
           })
        }).catch((err)=>{
            console.log(err)
        })
    }
}

const mapStateToProps = (state) => ({
    coursesCategory: state.courses.courses
});
export default connect(mapStateToProps)(Profile_Elearning);