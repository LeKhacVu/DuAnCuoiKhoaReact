import React, { Component } from 'react'
import './Course_Detail.css'
import Axios from 'axios'
import { connect } from 'react-redux'

import { chiTietKhoaHocApi } from '../../redux/actions/QuanLyKhoaHocAction'
class Course_Detail extends Component {
    render() {
        return (
            <div>
                <img className="images_style" src={this.props.coursesDetail.hinhAnh} alt="hinhanhchitiet" />
                <div className="container">
                    <p className="textDetail display-4">Giới thiệu khóa học (Phần mô tả của khóa học)</p>
                    <p>{this.props.coursesDetail.moTa}</p>
                </div>
            </div>
        )

    }
    componentDidMount() {

        this.props.dispatch(chiTietKhoaHocApi(this.props.match.params.courseId))
    }
}
const mapStateToProps = (state) => ({
    coursesDetail: state.courses.coursesDetail || {
        maKhoaHoc: "",
        tenKhoaHoc: "",
        hinhAnh: "",
        nguoiTao: {
            taiKhoan: "",
            hoTen: ""
        },
        moTa: "",
    }
});
export default connect(mapStateToProps)(Course_Detail);