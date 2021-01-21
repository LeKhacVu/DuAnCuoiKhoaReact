import { createAction } from '.';
import { userService } from '../../services';
import { DANG_NHAP } from '../constants/QuanLyKhoaHocConstant';
export const dangNhap = (user) => {
    return (dispatch) => {
        userService.signIn(user)
            .then((res) => {
                dispatch(createAction(DANG_NHAP, res.data));
                localStorage.setItem('credentials', JSON.stringify(res.data))
            }).catch((err) => {
                console.log(err);
            })
    }
}