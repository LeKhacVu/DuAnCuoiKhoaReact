import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Detail_Item from '../Detail_Item/Detail_Item'
import './Detail_Elearning.css'
export default class Detail_Elearning extends Component {
    render() {
        return (
            <div className="container-fluid">
                <h3 className="title-detail">Tìm thấy 10 khóa học FrontEnd</h3>
                <NavLink  to="/course">
               <Detail_Item />
               <Detail_Item />
               <Detail_Item />
               <Detail_Item />
               <Detail_Item />
               <Detail_Item />
               <Detail_Item />
               <Detail_Item />
               <Detail_Item />
               <Detail_Item />
               </NavLink>
            </div>
        )
    }
}
