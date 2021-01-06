import Axios from 'axios';
class UserService {
    signUp(data){
        return Axios({
            method:"POST",
            url:"https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
            data
        });
    }
}
export default UserService;