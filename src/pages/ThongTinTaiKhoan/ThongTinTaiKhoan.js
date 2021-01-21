import React, { Component } from 'react'
import './ThongTinTaiKhoan.css'
import {connect} from 'react-redux'
class ThongTinTaiKhoan extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row my-2">
                        <div className="col-lg-8 order-lg-2">
                            <ul className="nav nav-tabs">
                                <li className="nav-item">
                                    <a href data-target="#edit" data-toggle="tab" className="nav-link">THÔNG TIN TÀI KHOẢN</a>
                                </li>
                                <li className="nav-item">
                                    <a href data-target="#messages" data-toggle="tab" className="nav-link"> KHÓA HỌC CỦA TÔI</a>
                                </li>

                            </ul>
                            <div className="tab-content py-4">
                                <div className="tab-pane active" id="edit">
                                    <form role="form">
                                        <div className="form-group row">
                                            <label className="col-lg-3 col-form-label form-control-label">Họ Tên</label>
                                            <div className="col-lg-9">
                                                <input className="form-control" type="text" defaultValue={this.props.credentials.hoTen} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-lg-3 col-form-label form-control-label">Tài Khoản</label>
                                            <div className="col-lg-9">
                                                <input className="form-control" type="text" defaultValue={this.props.credentials.taiKhoan} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-lg-3 col-form-label form-control-label">Email</label>
                                            <div className="col-lg-9">
                                                <input className="form-control" type="email" defaultValue={this.props.credentials.email} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-lg-3 col-form-label form-control-label">Số điện thoại</label>
                                            <div className="col-lg-9">
                                                <input className="form-control" type="number" defaultValue={this.props.credentials.soDT} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-lg-3 col-form-label form-control-label">Password</label>
                                            <div className="col-lg-9">
                                                <input className="form-control" type="password" defaultValue={this.props.credentials.matKhau} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-lg-3 col-form-label form-control-label">Confirm password</label>
                                            <div className="col-lg-9">
                                                <input className="form-control" type="password" defaultValue={this.props.credentials.matKhau} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-lg-3 col-form-label form-control-label" />
                                            <div className="col-lg-9">
                                                <input type="reset" className="btn btn-secondary" defaultValue="Cancel" />
                                                <input type="button" className="btn btn-primary" defaultValue="Save Changes" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="tab-pane" id="messages">

                                    <h3 className="title-detail">Tìm thấy 10 khóa học FrontEnd</h3>
                                    <div className="detail-item">
                                        <div className="row style_detail">
                                            <div className="col-3">
                                                <img src="./img/kh4.jpg" />
                                            </div>
                                            <div className="col-7">
                                                <h4>Lập trình front end với react js</h4>
                                                <p>Các ngôn ngữ để phát triển Front End bao gồm 3 ngôn ngữ chủ đạo đó là: HTML, CSS và Javascript.
                                                Tuy nhiên, để code nhanh gọn lẹ thì ta có thể sử dụng thêm các framework hay thư viện khác như
                                                React js, angular js, vue js ...
                            </p>
                                            </div>
                                            <div className="col-2">
                                                <div className="rating">
                                                    <div className="rating_star">
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star-half-alt" /><span>4.4</span>
                                                    </div>

                                                    <p>(95 học viên )</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="detail-item">
                                        <div className="row style_detail">
                                            <div className="col-3">
                                                <img src="./img/kh4.jpg" />
                                            </div>
                                            <div className="col-7">
                                                <h4>Lập trình front end với react js</h4>
                                                <p>Các ngôn ngữ để phát triển Front End bao gồm 3 ngôn ngữ chủ đạo đó là: HTML, CSS và Javascript.
                                                Tuy nhiên, để code nhanh gọn lẹ thì ta có thể sử dụng thêm các framework hay thư viện khác như
                                                React js, angular js, vue js ...
                            </p>
                                            </div>
                                            <div className="col-2">
                                                <div className="rating">
                                                    <div className="rating_star">
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star-half-alt" /><span>4.4</span>
                                                    </div>

                                                    <p>(95 học viên )</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-4 order-lg-1 text-center images-profile">
                            <i className="fas fa-user-circle" style={{ fontSize: '150px' }}></i>
                            <label className="custom-file">
                                <input type="file" id="file" className="custom-file-input" />
                                <span className="custom-file-control" style={{ cursor: 'pointer' }}>Upload Avatar</span>
                            </label>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps =(state)=>{
    return {
        credentials:state.user.credentials || {
            hoTen:"",
            email:"",
            maNhom:"",
            soDT:"",
            taiKhoan:"",
            matKhau:"",

        }
    }
}
export default connect(mapStateToProps) (ThongTinTaiKhoan);