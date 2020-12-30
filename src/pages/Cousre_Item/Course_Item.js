
import { NavLink } from 'react-router-dom'
import React, { Component } from 'react'

export default class Course_Item extends Component {
    render() {
        return (
            <div>
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
                    <div className="price mt-2">
                        <NavLink to="/course" style={{marginTop:'10px',padding:'7px 8px', border:'1px solid #d4b03c',color:'black',backgroundColor:'#d4b03c',borderRadius:'5px'}}>Đăng ký</NavLink>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}


