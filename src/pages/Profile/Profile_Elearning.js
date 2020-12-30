import React from 'react'
import { NavLink } from 'react-router-dom'
import Course_Item from '../Cousre_Item/Course_Item'

import './Profile_Elearning.css'
export default function Profile_Elearning() {
    return (
        <div>
            <div className="profile">
                <div className="container">
                    <h3 className="title-profile ">LẬP TRÌNH FRONT-END</h3>
                </div>

            </div>
            <div className="course-special">
                <div className="container">
                    <h4 >Các khóa học phổ biến</h4>
                </div>
            </div>
            <div className="courses_item container">
                <div className="rowCourse">
                    <Course_Item />
                    <Course_Item />
                    <Course_Item />
                    <Course_Item />
                    <Course_Item />
                    <Course_Item />
                    <Course_Item />
                    <Course_Item />
                    <Course_Item />
                    <Course_Item />
                    <Course_Item />
                    <Course_Item />
                    




                </div>
            </div>
        </div>

    )
}
