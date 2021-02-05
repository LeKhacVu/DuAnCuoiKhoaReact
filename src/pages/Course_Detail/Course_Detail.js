import React, { Component } from 'react'
import './Course_Detail.css'
import Axios from 'axios'
import { connect } from 'react-redux'

import { chiTietKhoaHocApi, dangKyKhoaHoc, danhSachKhoaHoc } from '../../redux/actions/QuanLyKhoaHocAction'
import { coursesService } from '../../services'
class Course_Detail extends Component {
   
    render() {
        return (
            <div>

                <img className="images_style " src={this.props.coursesDetail.hinhAnh} alt="hinhanhchitiet" />

                <div className="title-detailCourse ">
                    <h3 className="display-4" style={{ fontSize: '50px' }} >{this.props.coursesDetail.tenKhoaHoc}</h3>
                    <span style={{ fontSize: '20px' }} >Đánh giá khóa học:</span>
                    <div className="rating">
                        <div className="rating_star">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star-half-alt" />
                        </div>
                    </div>
                    <div className="price mt-2">
                        <button  onClick={(values)=>{
                            this.props.dispatch(dangKyKhoaHoc(values))
                        }} style={{marginTop:'10px',padding:'5px 25px', border:'1px solid #d4b03c',color:'black',backgroundColor:'#d4b03c',borderRadius:'25px'}}>Đăng ký</button>
                    </div>


                </div>
                <div className="container">
                    <p className="textDetail display-4">Giới thiệu khóa học (Phần mô tả của khóa học)</p>
                    <p>{this.props.coursesDetail.moTa}</p>
                </div>
            </div>
        )

    }
    componentDidMount() {

        this.props.dispatch(chiTietKhoaHocApi(this.props.match.params.courseId));

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
    },
    danhSachKhoaHocDangKy: state.courses.danhSachKhoaHocDangKy
});
export default connect(mapStateToProps)(Course_Detail);