import React, { Component } from 'react'
import './Course_Detail.css'
import Axios from 'axios'
import { connect } from 'react-redux'
import { coursesService } from '../../services'
import { CHI_TIET_KHOA_HOC } from '../../redux/constants/QuanLyKhoaHocConstant'
import { createAction } from '../../redux/actions'
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

        coursesService.layChiTietKhoaHocApi(this.props.match.params.courseId)
            .then((res) => {
                this.props.dispatch(createAction(CHI_TIET_KHOA_HOC,res.data))
            }).catch((err) => {
                console.log(err)
            })
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