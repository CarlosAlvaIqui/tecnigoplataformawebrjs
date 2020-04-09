import React, { Fragment } from 'react';

import SecondHeader from '../../components/Header/SecondHeader';
import SecondFooter from '../../components/Footer/SecondFooter';


const Layout = props => {
    console.log("letsee what prints"+props.children)
    return (
        <Fragment>
            <SecondHeader />
    <main id="main">{props.children}</main>
            <SecondFooter />
        </Fragment>
    );
};

export default Layout;