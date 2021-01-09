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
                                    <h1>Learn on your schedule</h1>
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
                                            <p>4</p>
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
                                            <p>3250 Học viên</p>
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
                                            <p>54</p>
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