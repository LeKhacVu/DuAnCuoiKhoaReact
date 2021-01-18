    import Axios from 'axios';
    import * as yup from 'yup';
 export   const signupUserSchema = yup.object().shape({
        taiKhoan: yup.string().required("* Không được bỏ trống!"),
        matKhau: yup.string().required("* Không được bỏ trống!"),
        hoTen: yup.string().required("* Không được bỏ trống!"),
        email: yup.string().required("* Không được bỏ trống!").email("* Email không hợp lệ!"),
        soDT:yup.string().required("* Không được bỏ trống!").matches(/^[0-9]+$/),
        maNhom:yup.string().required("* Không được bỏ trống!")
    });
class UserService {
    signUp(data){
        return Axios({
            method:"POST",
            url:"https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
            data
        });
    }
    singIn(user){
        console.log(user)
        return Axios({
            method:"POST",
            url:"https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
            data: user
        });
    }
}
export default UserService;