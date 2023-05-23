import React from 'react';

import "../assets/css/Container.css";
import Slider from "./slider";
import Slogan from "./slogan";
import FamousPlaces from "./famous_places";

let Container = () => {
    return (
        <React.Fragment>
            <div className='Container'>
                <Slider />
                <Slogan />
                <FamousPlaces />
            </div>
        </React.Fragment>
    );
};

export default Container;