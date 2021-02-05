import { createAction } from ".";
import { coursesService } from "../../services";
import { DANH_SACH_KHOA_HOC, KHOA_HOC_THEO_DANH_MUC, CHI_TIET_KHOA_HOC, DANG_KY_KHOA_HOC } from "../constants/QuanLyKhoaHocConstant";

export const danhSachKhoaHoc = () => {
    return (dispatch) => {
        coursesService.layDanhSachKhoaHocApi()
            .then((res) => {
                dispatch(createAction(DANH_SACH_KHOA_HOC, res.data))
            }).catch((err) => {
                console.log(err)
            })

    }
}
export const khoaHocTheoDanhMuc = (id) => {
    return (dispatch) => {
        coursesService.layKhoaHocTheoDanhMucApi(id)
        .then((res)=>{
            dispatch(createAction(KHOA_HOC_THEO_DANH_MUC, res.data)
             )
         }).catch((err)=>{
             console.log(err)
         })
    }
}

export const chiTietKhoaHocApi = (courseId) => {
    return (dispatch) => {
        coursesService.layChiTietKhoaHocApi(courseId)
        .then((res) => {
           dispatch(createAction(CHI_TIET_KHOA_HOC,res.data))
        }).catch((err) => {
            console.log(err)
        })
}
}
export const dangKyKhoaHoc = (data)=>{
    return (dispatch) =>{
        coursesService.dangKyKhoaHocApi(data)
        .then((res)=>{
            dispatch(createAction(DANG_KY_KHOA_HOC,res.data))
            alert('Đăng ký khóa học thành công')
        }).catch((err)=>{
            console.log(err)
            alert('Đăng ký khóa học không thành công!')
        })
    }
}