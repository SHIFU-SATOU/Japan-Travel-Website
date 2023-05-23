import React from 'react';

import "../assets/css/Slogan.css";
import Shinkansen from "../assets/images/Slogan/shinkansen.png";

let Slogan = () => {
    return (
        <React.Fragment>
            <div className='Slogan'>
                <img src={Shinkansen} alt={'Shinkansen'} />
                <p>
                    <i>Cổ kính hòa hợp với hiện đại</i>
                </p>
            </div>
        </React.Fragment>
    );
}

export default Slogan;