import Axios from 'axios'
class CourseService {
    layDanhSachKhoaHocApi() {
        return Axios({
            method: 'GET',
            url: 'https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01'
        });
    }
    layChiTietKhoaHocApi(id) {
        return Axios({
            method: "GET",
            url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${id}`
        });
    }
    layDanhMucKhoaHocApi() {
        return Axios({
            method: 'GET',
            url: 'https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc'
        });
    }
    layKhoaHocTheoDanhMucApi(id) {
        return Axios({
            method: 'GET',
            url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${id}&MaNhom=GP01`
        });
    }
}
export default CourseService;