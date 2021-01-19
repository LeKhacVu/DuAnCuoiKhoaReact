import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Course_Item from '../Cousre_Item/Course_Item'
import './Profile_Elearning.css'
import { connect } from 'react-redux'
import { khoaHocTheoDanhMuc } from '../../redux/actions/QuanLyKhoaHocAction'
import { createAction } from '../../redux/actions'
import { coursesService } from '../../services'
import { KHOA_HOC_THEO_DANH_MUC } from '../../redux/constants/QuanLyKhoaHocConstant'



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
        coursesService.layKhoaHocTheoDanhMucApi(this.props.match.params.id)
        .then((res)=>{
            this.props.dispatch(createAction(KHOA_HOC_THEO_DANH_MUC, res.data)
             )
         }).catch((err)=>{
             console.log(err)
         })
    }
}

const mapStateToProps = (state) => ({
    coursesCategory: state.courses.courses
});
export default connect(mapStateToProps)(Profile_Elearning);