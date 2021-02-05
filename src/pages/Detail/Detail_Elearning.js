import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { danhSachKhoaHoc } from '../../redux/actions/QuanLyKhoaHocAction'
import Detail_Item from '../Detail_Item/Detail_Item'
import './Detail_Elearning.css'
class Detail_Elearning extends Component {
    render() {
        return (
            <div className="container-fluid">
                <h3 className="title-detail display-4">Các khóa học nổi bật </h3>
               <NavLink to="/course">
                    {this.props.coursesDetail.map((item,index)=>(
                        <Detail_Item item={item}/>
                        ))}
               </NavLink>
               
              
            </div>
        )
    }
    componentDidMount(){
        this.props.dispatch(danhSachKhoaHoc())
    }
}
const mapStateToProps = (state) => ({
    coursesDetail: state.courses.courses
});
export default connect(mapStateToProps)(Detail_Elearning);
