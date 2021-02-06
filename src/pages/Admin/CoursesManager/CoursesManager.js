import React, { Component } from 'react'
import { Input } from 'antd';
import { Button, Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Table, Tag, Space } from 'antd';
import { Link } from 'react-router-dom';
export default class CoursesManager extends Component {

    render() {

        const columns = [
            {
              title: 'STT',
              dataIndex: 'stt',
              key: 'stt',
              render: stt => <a>{stt}</a>,
            },
            {
              title: 'MaKhoaHoc',
              dataIndex: 'maKhoaHoc',
              key: 'maKhoaHoc',
            },
            {
              title: 'TenKhoaHoc',
              dataIndex: 'tenKhoaHoc',
              key: 'tenKhoaHoc',
            },
            {
              title: 'HinhAnh',
              key: 'hinhAnh',
              dataIndex: 'hinhAnh',
              
            },
            {
                title: 'LuotXem',
                key: 'luotXem',
                dataIndex: 'luotXem',
                
              },
              {
                title: 'NguoiTao',
                key: 'nguoiTao',
                dataIndex: 'nguoiTao',
                
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
              maKhoaHoc: '...',
              tenKhoaHoc: '...',
              hinhAnh: '...',
              luotXem: '...',
              nguoiTao:'Khải',

            },
           
          ];
        return (
            <div>
                <Link to="/admin/courses/themKhoaHoc">
                <h3>Thêm Khóa Học</h3></Link>
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