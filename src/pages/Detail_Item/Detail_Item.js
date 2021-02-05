import React from 'react'
import { Component } from 'react'

 class Detail_Item extends Component {
   render(){
    return (
        <div>
             <div className="detail-item">
                    <div className="row style_detail">
                        <div className="col-3">
                            <img src={this.props.item.hinhAnh} />
                        </div>
                        <div className="col-7">
                            <h4>{this.props.item.tenKhoaHoc}</h4>
                            <p>{this.props.item.moTa}
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
                                
                                <p>({this.props.item.luotXem} )</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}
}
export default Detail_Item;
