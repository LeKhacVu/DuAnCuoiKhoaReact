import React, { Component } from 'react'
import { Input } from 'antd';
import { Button, Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Table, Tag, Space } from 'antd';
import { Link } from 'react-router-dom';
export default class UserManager extends Component {
    render() {
        const columns = [
            {
              title: 'STT',
              dataIndex: 'stt',
              key: 'stt',
              render: stt => <a>{stt}</a>,
            },
            {
              title: 'Tài Khoản',
              dataIndex: 'taiKhoan',
              key: 'taiKhoan',
            },
            {
              title: 'Mật Khẩu',
              dataIndex: 'matKhau',
              key: 'matKhau',
            },
            {
              title: 'Họ Tên',
              key: 'hoTen',
              dataIndex: 'hoTen',
              
            },
            {
                title: 'Email',
                key: 'email',
                dataIndex: 'email',
                
              },
              {
                title: 'Số Điện Thoại',
                key: 'soDienThoai',
                dataIndex: 'soDienThoai',
                
              },
            {
              title: 'ThaoTac',
              key: 'thaoTac',
              render: () => (
                <Space size="middle">
                  <a>Ghi Danh </a>
                  <a>Sửa</a>
                  <a>Xóa</a>
                </Space>
              ),
            },
          ];
          
          const data = [
            {
              stt: '1',
            taiKhoan: 'Trương Tấn Khải',
              matKhau: '...',
              hoTen: '...',
              email: '...',
              soDienThoai:'0938489219',

            },
            {
                stt: '2',
                taiKhoan: 'Đặng Trung Hiếu',
                matKhau: '...',
                hoTen: '...',
                email: '...',
                soDienThoai:'0938489219',
  
              },
           
          ];
        return (
            <div>
                <Link to="/admin/users/themNguoiDung">
                <h3>Thêm Người Dùng</h3></Link>
                <div className="row mt-5 mb-5">
                   <div className="col-7">
                    <Input placeholder="Nhập vào tài khoản hoặc họ tên người dùng" />
                    </div>
                    <div className="col-5">
                    <Tooltip title="search" >
                        <Button  shape="circle" icon={<SearchOutlined />} />
                    </Tooltip>
                    </div>
                </div>
                <Table columns={columns} dataSource={data}/>
            
            </div>
        )
    }
}