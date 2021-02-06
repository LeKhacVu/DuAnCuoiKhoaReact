import { Input } from 'antd';
import React, { Component } from 'react'
import { Select } from 'antd';
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { DatePicker, Space } from 'antd';
import { Link } from 'react-router-dom';

export default class ThemKhoaHoc extends Component {
    render() {

        const { Option } = Select;

        function handleChange(value) {
            console.log(`selected ${value}`);
        }
        const props = {
            action: '//jsonplaceholder.typicode.com/posts/',
            listType: 'picture',
            previewFile(file) {
                console.log('Your upload file:', file);
                // Your process logic. Here we just mock to the same file
                return fetch('https://next.json-generator.com/api/json/get/4ytyBoLK8', {
                    method: 'POST',
                    body: file,
                })
                    .then(res => res.json())
                    .then(({ thumbnail }) => thumbnail);
            },
        };

        function onChange(date, dateString) {
            console.log(date, dateString);
        }

        return (
            <div>
                <div className="row">
                    <div className="col-6 mb-4">
                        <h4> Mã Khóa Học:</h4>
                        <Input placeholder="Mã Khóa Học" />
                    </div>
                    <div className="col-6 mb-4">
                        <h4>Đánh giá:</h4>
                        <Input />
                    </div>
                    <div className="col-6 mb-4">
                        <h4> Tên Khóa Học:</h4>
                        <Input placeholder="Tên Khóa Học" />
                    </div>
                    <div className="col-6 mb-4">
                        <h4>Lượt xem:</h4>
                        <Input />
                    </div>

                </div>
                <div>
                    <div className="row mb-4">
                        <div className="col-6">
                            <h4>Danh Mục Khóa Học:</h4>
                            <Select defaultValue="ltfe" style={{ width: 200 }} onChange={handleChange}>
                                <Option value="ltfe">Lập Trình FrontEnd</Option>
                                <Option value="ltbe">Lập Trình BackEnd</Option>
                            </Select>
                        </div>
                        <div className="col-6">
                            <h4>Người tạo</h4>
                            <Select defaultValue="khai" style={{ width: 200 }} onChange={handleChange}>
                                <Option value="khai">Trương Tấn Khải</Option>
                                <Option value="hieu">Đặng Trung Hiếu</Option>
                            </Select>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="row mb-4">
                        <div className="col-6">
                            <h4>Ngày Tạo:</h4>
                            <Space direction="vertical">
                                <DatePicker onChange={onChange} />
                            </Space>
                        </div>
                        <div className="col-6">
                            <h4>Hình ảnh</h4>
                            <Upload {...props}>
                                <Button icon={<UploadOutlined />}>Upload</Button>
                            </Upload>

                        </div>
                        <div className="col-6 mt-5">
                        <Link to="/admin/courses">
                            <span style={{ fontSize: 18 }}> Trở Lại</span>
                        </Link>
                        </div>
                        
                        <div className="col-6"> <div className="text-center mt-5">
                            <Button className="mr-2">Thêm</Button>
                            <Button>Lưu</Button>
                        </div></div>
                       
                    </div>
                </div>

            </div>
        )
    }
}
