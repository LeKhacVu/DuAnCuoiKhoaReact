import React, { Component } from 'react'

import Course_Item from '../Cousre_Item/Course_Item'
import './Profile_Elearning.css'
import { connect } from 'react-redux'
import { khoaHocTheoDanhMuc } from '../../redux/actions/QuanLyKhoaHocAction'




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
                            <Course_Item key={index} item={item} />
                        ))}
                    </div>
                </div>
            </div>

        )
    }
    componentDidMount(){ 
        this.props.dispatch(khoaHocTheoDanhMuc(this.props.match.params.id));
    }
}

const mapStateToProps = (state) => ({
    coursesCategory: state.courses.courses
});
export default connect(mapStateToProps)(Profile_Elearning);