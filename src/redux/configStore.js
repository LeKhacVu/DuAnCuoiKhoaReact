import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';


import CourseReducer from './reducers/CourseReducer';

const rootReducer = combineReducers({
    //reducer khai báo tại đây
   
    courses: CourseReducer,
})

const store = createStore(rootReducer,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    applyMiddleware(thunk)
    );

export default store;

