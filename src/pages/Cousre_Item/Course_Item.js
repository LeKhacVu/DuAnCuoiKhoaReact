
import { NavLink } from 'react-router-dom'
import React, { Component } from 'react'

 class Course_Item extends Component {
    render() {
        return (
            <div>
                 <div className="card ">
                <NavLink to={`/course/${this.props.item.maKhoaHoc}`}>
                <img className="card-img-top" src={this.props.item.hinhAnh} alt="Card image" style={{width:'100%',height:200}} />
                </NavLink>
                <div className="card-body">
                    <h4 className="card-title">{this.props.item.tenKhoaHoc}</h4>
                    <p className="card-text">{this.props.item.danhMucKhoaHoc.tenDanhMucKhoaHoc}</p>
                    <div className="rating">
                        <div className="rating_star">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star-half-alt" />
                        </div>
                        <span>4.4</span>
                        <span>({this.props.item.luotXem})</span>
                    </div>
                    <div className="price mt-2">
                        <NavLink to="/course" style={{marginTop:'10px',padding:'7px 8px', border:'1px solid #d4b03c',color:'black',backgroundColor:'#d4b03c',borderRadius:'5px'}}>Đăng ký</NavLink>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
export default Course_Item;

