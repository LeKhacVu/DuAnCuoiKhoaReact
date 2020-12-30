import React from 'react'

export default function Detail_Item() {
    return (
        <div>
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
    )
}
