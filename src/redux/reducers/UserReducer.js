

const stateDefault = {
    credentials: null
}
const UserReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'DANG_NHAP':{
            state.credentials = action.payload;
            return {...state}
        }
        default:
            return state;
    }
};
export default UserReducer;
