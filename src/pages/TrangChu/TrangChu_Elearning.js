import React, { Component } from 'react'
import './TrangChu_Elearning.css'
export default class TrangChu_Elearning extends Component {
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
                    <h4>Các khóa học mới nhất</h4>
                    <div className="courses_item container">
                        <div className="rowCourse">
                            <div className="card ">
                                <img className="card-img-top" src="./img/kh1.jpg" alt="Card image" />
                                <div className="card-body">
                                    <h4 className="card-title">An Entire MBA in 1 Course:Award Winning...</h4>
                                    <p className="card-text">Chris Haroun</p>
                                    <div className="rating">
                                        <div className="rating_star">
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star-half-alt" />
                                        </div>
                                        <span>4.4</span>
                                        <span>(39,866)</span>
                                    </div>
                                    <div className="price">
                                      <button>Đăng ký</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card ">
                                <img className="card-img-top" src="./img/kh2.jpg" alt="Card image" />
                                <div className="card-body">
                                    <h4 className="card-title">The Complete SQL Bootcamp 2020
      </h4>
                                    <p className="card-text">Jose Portilla</p>
                                    <div className="rating">
                                        <div className="rating_star">
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star-half-alt" />
                                        </div>
                                        <span>4.7</span>
                                        <span>(71,752)</span>
                                    </div>
                                    <div className="price">
                                        <button>Đăng ký</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card ">
                                <img className="card-img-top" src="./img/kh3.jpg" alt="Card image" />
                                <div className="card-body">
                                    <h4 className="card-title">The Complete Financial Analyst Course 2020
      </h4>
                                    <p className="card-text">365 Careers</p>
                                    <div className="rating">
                                        <div className="rating_star">
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star-half-alt" />
                                        </div>
                                        <span>4.5</span>
                                        <span>(42,603)</span>
                                    </div>
                                    <div className="price">
                                    <button>Đăng ký</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card ">
                                <img className="card-img-top" src="./img/kh4.jpg" alt="Card image" />
                                <div className="card-body">
                                    <h4 className="card-title">PMP Exam Prep Seminar - PMBOK Guide 6
      </h4>
                                    <p className="card-text">Joseph Phillips</p>
                                    <div className="rating">
                                        <div className="rating_star">
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star-half-alt" />
                                        </div>
                                        <span>4.6</span>
                                        <span>(48,819)</span>
                                    </div>
                                    <div className="price">
                                    <button>Đăng ký</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card ">
                                <img className="card-img-top" src="./img/kh5.jpg" alt="Card image" />
                                <div className="card-body">
                                    <h4 className="card-title">Tableau 2020 A-Z: Hands-On Tableau </h4>
                                    <p className="card-text">Kirill Eremenko</p>
                                    <div className="rating">
                                        <div className="rating_star">
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star-half-alt" />
                                        </div>
                                        <span>4.6</span>
                                        <span>(51,358)</span>
                                    </div>
                                    <div className="price">
                                    <button>Đăng ký</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card ">
                                <img className="card-img-top" src="./img/kh6.jpg" alt="Card image" />
                                <div className="card-body">
                                    <h4 className="card-title">Beginner to Pro in Excel: Financial Modeling
      </h4>
                                    <p className="card-text">365 Careers</p>
                                    <div className="rating">
                                        <div className="rating_star">
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star-half-alt" />
                                        </div>
                                        <span>4.4</span>
                                        <span>(39,866)</span>
                                    </div>
                                    <div className="price">
                                    <button>Đăng ký</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card ">
                                <img className="card-img-top" src="./img/kh9.jpg" alt="Card image" />
                                <div className="card-body">
                                    <h4 className="card-title">An Entire MBA in 1 Course:Award Winning...
      </h4>
                                    <p className="card-text">Chris Haroun</p>
                                    <div className="rating">
                                        <div className="rating_star">
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star-half-alt" />
                                        </div>
                                        <span>4.4</span>
                                        <span>(39,866)</span>
                                    </div>
                                    <div className="price">
                                    <button>Đăng ký</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card ">
                                <img className="card-img-top" src="./img/kh8.jpg" alt="Card image" />
                                <div className="card-body">
                                    <h4 className="card-title">The Ultimate Hands-On Hadoop - Tame your
      </h4>
                                    <p className="card-text">Chris Haroun</p>
                                    <div className="rating">
                                        <div className="rating_star">
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star-half-alt" />
                                        </div>
                                        <span>4.4</span>
                                        <span>(39,866)</span>
                                    </div>
                                    <div className="price">
                                    <button>Đăng ký</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* END COURSE */}
            </div>

        )
    }
}
