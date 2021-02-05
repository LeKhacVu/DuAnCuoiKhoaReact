const stateDefault ={
    courses: [],
    coursesDetail:null,
    danhSachKhoaHocDangKy:[],
}
const CourseReducer = (state = stateDefault, action) =>{
    switch(action.type){

        case 'DANH_SACH_KHOA_HOC':{
            state.courses = action.payload;
            return {...state}
        }
        case 'CHI_TIET_KHOA_HOC':{
            state.coursesDetail = action.payload;
            return {...state}
        }
        case 'DANH_MUC_KHOA_HOC':{
            state.courses = action.payload;
            return {...state}
        }
        case 'KHOA_HOC_THEO_DANH_MUC':{
            state.courses = action.payload;
            return {...state}
        }
        case 'DANG_KY_KHOA_HOC':{
            state.danhSachKhoaHocDangKy = action.payload;
            return {...state}
        }

        default: return state;
    }

}
export default CourseReducer;