import React from 'react';

import '../assets/css/Header.css';
import { Link } from 'react-router-dom';

import LOGO from "../assets/images/logo.png";
import Tokyo from "../assets/images/places/tokyo.jpg";
import Kyoto from "../assets/images/places/kyoto.jpg";
import Fujisan from "../assets/images/places/fujisan.jpg";
import Yokohama from "../assets/images/places/yokohama.jpg";
import Sumidagawa from "../assets/images/festival/sumidagawa_hanabi.png";
import Nebuta from "../assets/images/festival/nebuta.png";
import Onsen from "../assets/images/onsen/onsen.png";
import Hanami from "../assets/images/hanami_culture.png";
import CamNang from "../assets/images/cam_nang_du_lich_Nhat_Ban.png";
import Densha from "../assets/images/densha.png";
import Restaurant from "../assets/images/restaurant.png";

let Header = () => {
    return (
        <React.Fragment>
            <div className='Header'>
                {/* Begin: Logo */}
                <div className='Logo'>
                    <Link to='/'>
                        <img src={LOGO} alt={'LOGO'} />
                    </Link>
                </div>
                {/* End: Logo */}

                {/* Begin: Header__Navigation-bar */}
                <ul className='Header__Navigation-bar'>
                    <li>
                        <b>Điểm đến</b>
                        <ul className='Header__Sub-navigation'>
                            <div className='half-col'>
                                <p>
                                    <b>Điểm đến hàng đầu</b>
                                </p>

                                <div className='third-col --padding-0-4'>
                                    <li>
                                        <Link to='/tokyo'>Tokyo</Link>
                                    </li>
                                    <li>
                                        <Link to='/Nagakawa'>Nagakawa</Link>
                                    </li>
                                </div>
                                <div className='third-col --padding-0-4'>
                                    <li>
                                        <Link to='/Osaka'>Osaka</Link>
                                    </li>
                                    <li>
                                        <Link to='/Kyoto'>Kyoto</Link>
                                    </li>
                                </div>
                                <div className='third-col --padding-0-4'>
                                    <li>
                                        <Link to='/Hokkaido'>Hokkaido</Link>
                                    </li>
                                    <li>
                                        <Link to='/Hokkaido'>Okinawa</Link>
                                    </li>
                                </div>
                            </div>

                            <div className='half-col'>
                                <div className='row --padding-8-0'>
                                    <Link to='/not-found' className='item'>
                                        <figure>
                                            <figcaption>Tokyo</figcaption>
                                            <img src={Tokyo} alt={'Tokyo'} />
                                        </figure>
                                    </Link>
                                    <Link to='/not-found' className='item'>
                                        <figure>
                                            <figcaption>Kyoto</figcaption>
                                            <img src={Kyoto} alt={'Kyoto'} />
                                        </figure>
                                    </Link>
                                </div>
                                <div className='row --padding-8-0'>
                                    <Link to='/not-found' className='item'>
                                        <figure>
                                            <figcaption>Núi Phú Sĩ</figcaption>
                                            <img src={Fujisan} alt={"Núi Phú Sĩ"} />
                                        </figure>
                                    </Link>

                                    <Link to='/not-found'>
                                        <figure className='item'>
                                            <figcaption>Yokohama</figcaption>
                                            <img src={Yokohama} alt={'Yokohama'} />
                                        </figure>
                                    </Link>
                                </div>
                            </div>
                        </ul>
                    </li>

                    <li>
                        <b>Kiến thức</b>
                        <ul className='Header__Sub-navigation'>
                            <div className='half-col --padding-8'>
                                <div className='third-col --padding-0-4'>
                                    <li>
                                        <Link to='/not-found'>Lễ hội và sự kiện</Link>
                                    </li>
                                </div>
                                <div className='third-col --padding-0-4'>
                                    <li>
                                        <Link to='/not-found'>Suối nước nóng</Link>
                                    </li>
                                </div>
                                <div className='third-col --padding-0-4'>
                                    <li>
                                        <Link to='/not-found'>Hướng dẫn mùa xuân</Link>
                                    </li>
                                    <li>
                                        <Link to='/not-found'>Hướng dẫn mùa hè</Link>
                                    </li>
                                    <li>
                                        <Link to='/not-found'>Hướng dẫn mùa đông</Link>
                                    </li>
                                </div>
                            </div>

                            <div className='half-col --padding-8'>
                                <div className='row'>
                                    <Link to='/not-found' className='item'>
                                        <figure>
                                            <figcaption>Sumidagawa</figcaption>
                                            <img src={Sumidagawa} alt="Lễ hội pháo hoa Sumidagawa" />
                                        </figure>
                                    </Link>

                                    <Link to='/not-found' className='item'>
                                        <figure>
                                            <figcaption>Nebuta</figcaption>
                                            <img src={Nebuta} alt="Lễ hội lồng đèn Nebuta" />
                                        </figure>
                                    </Link>
                                </div>

                                <div className='row'>
                                    <Link to='/not-found' className='item'>
                                        <figure>
                                            <figcaption>Suối nước nóng</figcaption>
                                            <img src={Onsen} alt="Suối nước nóng" />
                                        </figure>
                                    </Link>

                                    <Link to='/not-found' className='item'>
                                        <figure className='item'>
                                            <figcaption>Văn hóa ngắm hoa</figcaption>
                                            <img src={Hanami} alt="Văn hóa ngắm hoa" />
                                        </figure>
                                    </Link>
                                </div>
                            </div>
                        </ul>
                    </li>

                    <li>
                        <b>Lên kế hoạch</b>
                        <div className='Header__Sub-navigation'>
                            <div className='half-col --padding-8'>
                                <div className='third-col --padding-0-4'>
                                    <ul>
                                        <li>
                                            <Link to='/not-found'>Thông tin xin Visa</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className='third-col --padding-0-4'>
                                    <ul>
                                        <li>
                                            <Link to='/not-found'>Phương tiện giao thông</Link>
                                        </li>
                                        <li>
                                            <Link to='/not-found'>Các loại hình lưu trú</Link>
                                        </li>
                                        <li>
                                            <Link to='/not-found'>Tàu điện Nhật Bản</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className='third-col --padding-0-4'>
                                    <ul>
                                        <li>
                                            <Link to='/not-found'>Cẩm nang du lịch</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className='half-col --padding-8'>
                                <div className='col'>
                                    <Link to='/not-found' className='item'>
                                        <figure>
                                            <figcaption>Cẩm nang du lịch</figcaption>
                                            <img src={CamNang} alt="Cẩm nang du lịch Nhật Bản" />
                                        </figure>
                                    </Link>
                                </div>

                                <div className='col'>
                                    <div className='row'>
                                        <Link to='/not-found' className='item'>
                                            <figure>
                                                <figcaption>Tìm nhà hàng</figcaption>
                                                <img src={Restaurant} alt={"Nhà hàng"} />
                                            </figure>
                                        </Link>
                                    </div>

                                    <div className='row'>
                                        <Link to='/not-found' className='item'>
                                            <figure>
                                                <figcaption>Tàu điện</figcaption>
                                                <img src={Densha} alt={"Ga tàu điện"} />
                                            </figure>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li>
                        <b>Blog</b>
                    </li>
                </ul>
                {/* End: Header__Navigation-bar */}

                {/* Begin: Header__Search-bar */}
                <div className='Header__Search-bar'>
                    <input type={'search'} placeholder={"Tìm kiếm"} />
                    <button className='Search-btn'>
                        <i class="fa-solid fa-magnifying-glass search-icon"></i>
                    </button>
                </div>
                {/* End: Header__Search-bar */}
            </div>
        </React.Fragment>
    );
}

export default Header;