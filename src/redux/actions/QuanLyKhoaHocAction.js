import { createAction } from ".";
import { coursesService } from "../../services";
import { DANH_SACH_KHOA_HOC, DANH_MUC_KHOA_HOC, KHOA_HOC_THEO_DANH_MUC } from "../constants/QuanLyKhoaHocConstant";

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
export const khoaHocTheoDanhMuc = () => {
    return (dispatch) => {
        coursesService.layKhoaHocTheoDanhMucApi()
        .then((res)=>{
            dispatch(createAction(KHOA_HOC_THEO_DANH_MUC, res.data)
             )
         }).catch((err)=>{
             console.log(err)
         })
    }
}