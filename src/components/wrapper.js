import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Header from './header';
import Container from './container';
import Footer from './footer';
import Tokyo from "../pages/Tokyo.js";
import NotFound from "../pages/404_page.js";

let Wrapper = () => {
    return (
        <React.Fragment>
            <div className='Wrapper'>
                <Header />
                <Routes>
                    <Route path='/' element={<Container />} />
                    <Route path='/tokyo' element={<Tokyo />} />
                    <Route path='/not-found' element={<NotFound />} />
                </Routes>
                <Footer />
            </div>
        </React.Fragment>
    );
}

export default Wrapper;