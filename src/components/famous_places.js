import React from 'react';

import "../assets/css/FamousPlaces.css";
import Fujisan from "../assets/images/Famous places/fujisan.png";
import Shirakawa from "../assets/images/Famous places/Shirakawa.png";
import Ginzan from "../assets/images/Famous places/Ginzan.png";
import Akihabara from "../assets/images/Famous places/Akihabara.png";
import GundamFactory from "../assets/images/Famous places/Gundam_factory_Yokohama.png";
import Asakusa from "../assets/images/Famous places/Asakusa.png";
import Nara from "../assets/images/Famous places/Nara.png";
import Ozakajou from "../assets/images/Famous places/Ozakajou.png";
import Okinawa from "../assets/images/Famous places/Okinawa.png";
import Hokkaido from "../assets/images/Famous places/Hokkaido.png";


let FamousPlaces = () => {
    return (
        <React.Fragment>
            <div className='Famous-places'>
                <div className='row --padding-8-0'>
                    <div className='col --padding-0-8'>
                        <figure className='place'>
                            <figcaption className='place-name --large-cap'>Núi Phú Sĩ</figcaption>
                            <img src={Fujisan} alt={"Núi Phú Sĩ"} className='--large-picture' />
                        </figure>
                    </div>

                    <div className='col --padding-0-8'>
                        <div className='row --padding-bot-8'>
                            <div className='col --padding-right-8'>
                                <figure className='place'>
                                    <figcaption className='place-name'>Shirakawa</figcaption>
                                    <img src={Shirakawa} alt={"Thị trấn cổ Shirakawa"} className='--small-picture' />
                                </figure>
                            </div>
                            <div className='col --padding-left-8'>
                                <figure className='place'>
                                    <figcaption className='place-name'>Ginzan</figcaption>
                                    <img src={Ginzan} alt={"Thị trấn suối nước nóng Ginzan"} className='--small-picture' />
                                </figure>
                            </div>
                        </div>

                        <div className='row --padding-top-8'>
                            <div className='col --padding-right-8'>
                                <figure className='place'>
                                    <figcaption className='place-name'>Akihabara</figcaption>
                                    <img src={Akihabara} alt={"Kinh đô anime Akihabara"} className='--small-picture' />
                                </figure>
                            </div>
                            <div className='col --padding-left-8'>
                                <figure className='place'>
                                    <figcaption className='place-name'>Nhà máy Gundam</figcaption>
                                    <img src={GundamFactory} alt={"Nhà máy GUNDAM Yokohama"} className='--small-picture' />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row --padding-8-0'>
                    <div className='col --padding-0-8'>
                        <div className='row --padding-bot-8'>
                            <div className='col --padding-right-8'>
                                <figure className='place'>
                                    <figcaption className='place-name'>Nara</figcaption>
                                    <img src={Nara} alt={"Nara thị trấn của hươu"} className='--small-picture' />
                                </figure>
                            </div>
                            <div className='col --padding-left-8'>
                                <figure className='place'>
                                    <figcaption className='place-name'>Thành Osaka</figcaption>
                                    <img src={Ozakajou} alt={"Thành Osaka"} className='--small-picture' />
                                </figure>
                            </div>
                        </div>

                        <div className='row --padding-top-8'>
                            <div className='col --padding-right-8'>
                                <figure className='place'>
                                    <figcaption className='place-name'>Okinawa</figcaption>
                                    <img src={Okinawa} alt={"Okinawa"} className='--small-picture' />
                                </figure>
                            </div>
                            <div className='col --padding-left-8'>
                                <figure className='place'>
                                    <figcaption className='place-name'>Hokkaido</figcaption>
                                    <img src={Hokkaido} alt={"Hokkaido"} className='--small-picture' />
                                </figure>
                            </div>
                        </div>
                    </div>

                    <div className='col --padding-0-8'>
                        <figure className='place'>
                            <figcaption className='place-name --large-cap'>Chùa Asakusa</figcaption>
                            <img src={Asakusa} alt={"Chùa Asakusa"} className='--large-picture' />
                        </figure>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default FamousPlaces;