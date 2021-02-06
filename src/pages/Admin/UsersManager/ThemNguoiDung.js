import React, { Component } from 'react'
import { Input } from 'antd';
import { Select } from 'antd';
import { Link } from 'react-router-dom';
import {Button} from 'antd';
export default class ThemNguoiDung extends Component {
    render() {
        const { Option } = Select;

        function handleChange(value) {
            console.log(`selected ${value}`);
        }
        return (
            <div>
                 <div className="row">
                    <div className="col-6 mb-4">
                        <h4> Tài Khoản:</h4>
                        <Input placeholder="Tài Khoản" />
                    </div>
                    <div className="col-6 mb-4">
                        <h4>Email:</h4>
                        <Input />
                    </div>
                    <div className="col-6 mb-4">
                        <h4> Mật Khẩu:</h4>
                        <Input  />
                    </div>
                    <div className="col-6 mb-4">
                        <h4>Số Điện Thoại:</h4>
                        <Input />
                    </div>
                    <div className="col-6 mb-4">
                        <h4>Họ Tên:</h4>
                        <Input />
                    </div>
                    <div className="col-6 mb-4">
                        <h4>Loại Người Dùng:</h4>
                        <Select defaultValue="gv" style={{ width: 200 }} onChange={handleChange}>
                                <Option value="gv">GIÁO VỤ</Option>
                                <Option value="hv">HỌC VIÊN</Option>
                            </Select>
                    </div>
                    <div className="col-6 mt-5">
                            <Link to="/admin/courses">
                                <span style={{ fontSize: 18 }}> Trở Lại</span>
                            </Link>
                        </div>

                        <div className="col-6">
                            <div className="text-center mt-5">
                                <Button className="mr-2">Thêm</Button>
                                <Button>Lưu</Button>
                            </div>
                        </div>
                </div>
                
            </div>
        )
    }
}
