import React from 'react';
import { Link } from 'react-router-dom';

import "../assets/css/Footer.css";
import LOGO from "../assets/images/logo.png";

let Footer = () => {
    return (
        <React.Fragment>
            <div className='Footer'>
                <div className='row Footer__Sitemap'>
                    <div className='container col'>
                        <div className='Logo '>
                            <Link to='/'>
                                <img src={LOGO} alt={"Logo"} />
                            </Link>
                        </div>

                        <ul>
                            <li>Chính sách quyền riêng tư</li>
                            <li>Chính sách Cookie</li>
                            <li>Điều khoản sử dụng</li>
                            <li>Sơ đồ trang web</li>
                        </ul>

                        <div className='Social-Network col'>
                            <div className='col'>
                                <i className="fa-brands fa-square-facebook facebook-icon"></i>
                            </div>
                            <div className='col'>
                                <i class="fa-brands fa-square-youtube youtube-icon"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row Footer__copy-right'>
                    <p>Bản quyền &copy; thuộc về Wows Japn.</p>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Footer;