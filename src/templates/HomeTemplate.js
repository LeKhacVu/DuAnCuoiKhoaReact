import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Footer_Elearning from '../components/Footer/Footer_Elearning';
import Header_Elearning from '../components/Header/Header_Elearning';





export const HomeTemplate = ({ Component, ...restProps }) => {
    return <Route {...restProps} render={(propsRoute) => {
        return <Fragment>
            <Header_Elearning />
            <Component {...propsRoute} />
            <Footer_Elearning />
        </Fragment>
    }} />
}