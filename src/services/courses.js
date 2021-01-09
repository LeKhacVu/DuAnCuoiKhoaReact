import Axios from 'axios'
class CourseService {
    layDanhSachKhoaHocApi() {
        return Axios({
            method: 'GET',
            url: 'https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01'
        });
    }
    layChiTietKhoaHocApi() {
        return Axios({
            method: "GET",
            url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=1"
        });
    }
    layDanhMucKhoaHocApi() {
        return Axios({
            method: 'GET',
            url: 'https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc'
        });
    }
    layKhoaHocTheoDanhMucApi() {
        return Axios({
            method: 'GET',
            url: 'https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=FrontEnd&MaNhom=GP01'
        });
    }
}
export default CourseService;