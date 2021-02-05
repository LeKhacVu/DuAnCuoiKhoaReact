import React, { Component } from 'react'
import Course_Item from '../Cousre_Item/Course_Item'
import './TrangChu_Elearning.css'

import { connect } from 'react-redux'
import { danhSachKhoaHoc } from '../../redux/actions/QuanLyKhoaHocAction'

class TrangChu_Elearning extends Component {
    render() {
        return (
            <div>
                {/*BEGIN CAROUSEL */}
                <div className="udemyCarousel"  >
                    <div className="carousel_content">
                        <div className="row">
                            <div className="col-5">
                                <div>
                                    <h1 style={{ color: 'white' }}>Learn on your schedule</h1>
                                    <p>Study any topic, anytime. Choose from thousands of expert-led courses now.</p>
                                    <form>
                                        <div className="input-group ">
                                            <input type="text" className="form-control" placeholder="Search for anything" aria-label="Recipient's userName" aria-describedby="basic-addon2" />
                                            <div className="input-group-append">
                                                <span className="input-group-text" id="basic-addon2"><i className="fa fa-search" /></span>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* END CAROUSEL */}
                {/* BEGIN INTRO */}
                <div>
                    <section className="intro">
                        <div className="container-fluid">
                            <div className="row intro__content">
                                <div className="col-md-4">
                                    <div className="intro__item d-flex">
                                        <div className="icon">
                                            <i className="fa fa-bullseye" />
                                        </div>
                                        <div className="icon__content">
                                            <p>7</p>
                                            <p>Trung tâm</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="intro__item d-flex justify-content-center">
                                        <div className="icon">
                                            <i className="far fa-comment" />
                                        </div>
                                        <div className="icon__content">
                                            <p>4030 Học viên</p>
                                            <p style={{ opacity: '0.5' }}>Và hơn thế nữa...</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="intro__item d-flex justify-content-end">
                                        <div className="icon">
                                            <i className="fas fa-history" />
                                        </div>
                                        <div className="icon__content">
                                            <p>65</p>
                                            <p>Đối tác</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
                {/* END INTRO */}
                {/* BEGIN COURSE */}
                <div className="course">
                    <h4 className="container course_style display-4">Các khóa học mới nhất</h4>
                    <div className="courses_item container">
                        <div className="rowCourse">
                            {this.props.coursesList.map((item, index) => (
                                <Course_Item item={item} />
                            ))}
                        </div>
                    </div>

                </div>
                {/* END COURSE */}
                {/* BEGIN INFOR */}
                <div className="zn-bgSource ">
                    <div className="zn-bgSource-image" style={{ backgroundImage: 'url("https://cybersoft.edu.vn/wp-content/uploads/2020/04/funfact_bg.png")', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundSsize: 'cover', backgroundAttachment: 'scroll' }}>

                    </div>
                    <div className="zn_section_size container zn-section-height--custom_height zn-section-content_algn--top ">
                        <div className="row ">
                            <div className="eluidbab205c8      col-md-6 col-sm-6   znColumnElement" id="eluidbab205c8">
                                <div className="znColumnElement-innerWrapper-eluidbab205c8 znColumnElement-innerWrapper znColumnElement-innerWrapper--valign-top znColumnElement-innerWrapper--halign-left ">
                                    <div className="znColumnElement-innerContent">
                                        <div className="image-boxes imgbox-simple eluidac6a3547 ">
                                            <div className="image-boxes-holder imgboxes-wrapper u-mb-0  ">
                                                <div className="image-boxes-img-wrapper img-align-center">
                                                    <img className="image-boxes-img img-responsive " src="https://cybersoft.edu.vn/wp-content/uploads/2020/04/online.png" alt title="online" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="eluid87837e95      col-md-6 col-sm-6   znColumnElement" id="eluid87837e95">
                                <div className="znColumnElement-innerWrapper-eluid87837e95 znColumnElement-innerWrapper znColumnElement-innerWrapper--valign-top znColumnElement-innerWrapper--halign-left ">
                                    <div className="znColumnElement-innerContent">
                                        <div className="kl-title-block clearfix tbk--text- tbk--left text-left tbk-symbol--  tbk-icon-pos--after-title eluiddddb1d3d ">
                                            <h3 className="tbk__title display-4 " itemProp="headline">Học Online tại CyberLearn.vn</h3>
                                        </div>
                                        <div className="kl-title-block clearfix tbk--text- tbk--left text-left tbk-symbol--  tbk-icon-pos--after-title eluid7eb127ac ">
                                            <h3 className="tbk__title " itemProp="headline" style={{ fontSize: 20, fontWeight: 30 }}>Hơn 92% trên hơn 3000 học viên học tại CyberSoft học theo lộ trình và có việc làm tốt. CyberSoft đã triển khai chương trình Học lập trình trực tuyến Online tại CyberLearn để tạo điều kiện cho các bạn không có điều kiện học trực tiếp tại HCM có thể tham gia. </h3>
                                        </div>
                                        <div id="eluidc648aaad" className="zn_buttons_element eluidc648aaad text-center ">
                                            <a href="https://cyberlearn.vn" id="eluidc648aaad0" className="eluidc648aaad0 btn-element btn-element-0 btn  btn-fullcolor btn-custom-color   zn_dummy_value btn-icon--after btn--square" target="_blank" rel="noopener" itemProp="url">
                                                <span>DANH SÁCH KHÓA HỌC</span>
                                            </a>
                                            <a href="https://www.facebook.com/lophocviet/" id="eluidc648aaad1" className="eluidc648aaad1 btn-element btn-element-1 btn  btn-lined lined-custom   zn_dummy_value btn-icon--after btn--square" target="_blank" rel="noopener" itemProp="url">
                                                <span>INBOX TƯ VẤN HỌC TẬP</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* END INFOR */}
                {/* BEGIN CONTACT */}
                <div className="zn_custom_container eluid6f572f9a  smart-cnt--default   clearfix container">
                    <div className="row zn_col_container-smart_container ">
                        <div className="eluid1d9dd8e9      col-md-12 col-sm-12   znColumnElement" id="eluid1d9dd8e9">
                            <div className="znColumnElement-innerWrapper-eluid1d9dd8e9 znColumnElement-innerWrapper znColumnElement-innerWrapper--valign-top znColumnElement-innerWrapper--halign-left ">
                                <div className="znColumnElement-innerContent">
                                    <div className="kl-title-block clearfix tbk--text- tbk--center text-center tbk-symbol--  tbk-icon-pos--left-title eluiddabd6441 ">
                                        <h3 className="tbk__title" itemProp="headline">CÁC CÔNG TY CỰU HỌC VIÊN CYBERSOFT ĐANG LÀM VIỆC</h3>
                                        <h4 className="tbk__subtitle" itemProp="alternativeHeadline" style={{ fontWeight: 200 }}>100% học viên sau khi hoàn thành dự án đều có công việc như mong đợi tại các tập đoàn phần mềm, các công ty phần mềm đa quốc gia, các công ty khởi nghiệp....với thu nhập từ 90~140 triệu/1 năm.</h4>
                                    </div>
                                    <div className="image-boxes imgbox-simple eluidf9e82d72 ">
                                        <div className="image-boxes-holder imgboxes-wrapper u-mb-0  ">
                                            <div className="image-boxes-img-wrapper img-align-center">
                                                <img className="image-boxes-img img-responsive " src="https://cybersoft.edu.vn/wp-content/uploads/2019/01/Screen-Shot-2019-01-18-at-11.06.34-PM.png" alt title="Screen Shot 2019-01-18 at 11.06.34 PM" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                {/* END CONTACT */}
                <div className="cybersoft_ceo">
                    <div className="container">
                        <p>“ CyberSoft Academy là học viện tiên phong tại Việt Nam áp dụng phương pháp đào tạo Active Learning và Flipped Learning thông qua các dự án thực tiễn trong lĩnh vực đào tạo CNTT. Học viên sẽ đóng vai trò là một Scrum member trong mô hình Agile để trở thành một lập trình chuyên nghiệp, đáp ứng mọi nhu cầu tuyển dụng của Doanh nghiệp.”

                    </p>
                        <p>-CYBERSOFT CEO</p>
                    </div>
                </div>
                <div className="text__end">
                <div className="container text-center ">
                    <p style={{ fontSize: 24 }}>Định hướng và Chuẩn hóa lộ trình từ trái ngành mất gốc lập trình đến Có việc làm</p>
                    <p style={{ fontSize: 30, fontWeight: 700 }}>Học Thật, Dự Án Thật, Giảng Viên Kinh Nghiệm, Tận Tâm</p>
                    <div id="eluidc648aaad" className="zn_buttons_element eluidc648aaad text-center ">
                        <a href="https://cyberlearn.vn" id="eluidc648aaad0" className="eluidc648aaad0 btn-element btn-element-0 btn  btn-fullcolor btn-custom-color   zn_dummy_value btn-icon--after btn--square" target="_blank" rel="noopener" itemProp="url">
                            <span>DANH SÁCH KHÓA HỌC</span>
                        </a>
                        <a href="https://www.facebook.com/lophocviet/" id="eluidc648aaad1" className="eluidc648aaad1 btn-element btn-element-1 btn  btn-lined lined-custom   zn_dummy_value btn-icon--after btn--square" target="_blank" rel="noopener" itemProp="url">
                            <span>INBOX TƯ VẤN HỌC TẬP</span>
                        </a>
                    </div>
                </div>
                </div>
               

            </div>

        )
    }
    componentDidMount() {
        this.props.dispatch(danhSachKhoaHoc())

    }
}
const mapStateToProps = (state) => ({
    coursesList: state.courses.courses
});
export default connect(mapStateToProps)(TrangChu_Elearning);