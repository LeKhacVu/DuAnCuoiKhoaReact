import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';


import CourseReducer from './reducers/CourseReducer';
import UserReducer from './reducers/UserReducer';
const rootReducer = combineReducers({
    //reducer khai báo tại đây

    courses: CourseReducer,
    user: UserReducer
})

const store = createStore(rootReducer,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    applyMiddleware(thunk)
);

export default store;

