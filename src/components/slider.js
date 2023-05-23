import React from 'react';

import "../assets/css/slider.css";
import Japan1 from "../assets/images/slider/Japan1.png";

let Slider = () => {
    return (
        <React.Fragment>
            <div className='Slider'>
                <img src={Japan1} alt={"Nhật Bản"} />
                <p>Khám phá sức hấp dẫn của các tỉnh thành Nhật Bản</p>
            </div>
        </React.Fragment>
    );
}

export default Slider;