import { createAction } from '.';
import { userService } from '../../services';
import { DANG_NHAP } from '../constants/QuanLyKhoaHocConstant';
export const dangNhap = (user) => {
    return (dispatch) => {
        userService.signIn(user).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    }
}