import React from 'react';

import "../assets/css/sub_pages/place_page.css";
import NationalDietBuilding from "../assets/images/Tokyo/Japan_National_diet_building.png";
import Sensoji from "../assets/images/Tokyo/asakusa.png";
import SkyTree from "../assets/images/Tokyo/SkyTree.png";
import Akihabara from "../assets/images/Tokyo/Akihabara.png";
import Nezu from "../assets/images/Tokyo/Nezu.png";
import Shibuya from "../assets/images/Tokyo/Shibuya.png";
import TokyoDisneySea from "../assets/images/Tokyo/TokyoDisneySea.png";
import TokyoSlider from "../assets/images/Tokyo/Tokyo.png";

let Tokyo = () => {
    return (
        <React.Fragment>
            <div className='post'>
                <div className='slider'>
                    <figure>
                        <img src={TokyoSlider} alt={"Tokyo"} />
                        <figcaption>
                            <h3>KANTO</h3>
                            <h1>TOKYO</h1>
                        </figcaption>
                    </figure>
                </div>

                <div className='container'>
                    <div className='post-name'>
                        <h1>Khám phá Tokyo</h1>
                    </div>

                    <div className='post-description'>
                        <p className='post-time'>
                            <i class="fa-solid fa-calendar-days calender-icon"></i>
                            29/11/2022
                        </p>

                        <p className='post-writter'>
                            <i class="fa-solid fa-feather feather-icon"></i>
                            Admin
                        </p>
                    </div>

                    <div className='post-content'>
                        <div className='row'>
                            <figure className='design-1'>
                                <img src={NationalDietBuilding} alt={"Toà nhà quốc hội Nhật Bản"} />
                                <figcaption>
                                    <i>Tòa nhà quốc hội</i>
                                </figcaption>
                            </figure>
                            <p>
                                Tokyo là một trong 47 tỉnh thành của Nhật Bản, nằm ở phía đông của đảo chính <a href='https://vi.wikipedia.org/wiki/Honshu'>Honshu</a> vùng <a href='https://vi.wikipedia.org/wiki/Kant%C5%8D'>Kanto</a>. Đây là nơi đặt Hoàng Cung và các cơ quan đầu não của <a href='https://vi.wikipedia.org/wiki/Ch%C3%ADnh_ph%E1%BB%A7_Nh%E1%BA%ADt_B%E1%BA%A3n'>Chính phủ Nhật Bản</a>. Mặc dù vậy Tokyo không phải là thủ đô của Nhật Bản. Vì vậy Nhật Bản là đất nước duy nhất trên thế giới không có thủ đô.
                            </p>
                        </div>

                        <div className='row'>
                            <h2>1. Chùa Senso cổ kính nhất Tokyo</h2>
                            <figure className='design-2'>
                                <img src={Sensoji} alt={"Chùa Senso"} />
                                <figcaption>
                                    <i>Chùa Senso</i>
                                </figcaption>
                            </figure>
                            <p>
                                Chùa Senso-ji hay còn gọi là Asakusa Kannon được xây dựng vào năm 645 và được xem là ngôi chùa cổ nhất tại thành phố Tokyo Nhật Bản. Đặc biệt trước cổng có một chiếc đèn lồng lớn màu đỏ, cao 4m, chu vi 3,4m nặng đến 670 kg. Hai bên của cánh cổng là tượng thần <a href='https://vi.wikipedia.org/wiki/Raijin'>Raijin (thần Sấm)</a> và <a href='https://vi.wikipedia.org/wiki/F%C5%ABjin'>thần Fujin (thần Gió)</a>. Qua bao nhiêu thế kỷ, chùa Senso-ji vẫn còn lưu giữ không ít các di tích cổ, đó là một trong những nguyên nhân thu hút vô số người dân cũng như khách du lịch Tokyo Nhật Bản đến tham quan.

                            </p>
                        </div>

                        <div className='row'>
                            <h2>2. Tháp truyền hình Tokyo Skytree</h2>
                            <figure className='design-1'>
                                <img src={SkyTree} alt={"Tháp truyền hình Tokyo Skytree"} />
                                <figcaption>
                                    <i>Tháp truyền hình Tokyo Skytree</i>
                                </figcaption>
                            </figure>
                            <p>
                                Tokyo Skytree được khánh thành vào năm 2012, là tháp truyền hình mang tính bước ngoặt của du lịch Nhật Bản. Với chiều cao 634m, được xem là tòa nhà cao nhất ở Nhật Bản cũng như là tháp truyền hình cao nhất thế giới. Tòa tháp bao gồm khu phức hợp mua sắm lớn và bể cá được thiết kế ở tầng hầm cũng như là điểm tham quan thu hút khách du lịch bậc nhất Tokyo. Điểm nổi bật của Tokyo Skytree là có hai đài quan sát nằm ở độ cao 350 mét và 450 mét với tầm nhìn ngoạn mục bao quát khắp Tokyo. Đây được xem là nơi quan sát cao nhất Nhật Bản và là một trong những đài quan sát cao nhất trên thế giới. Ở phía trên cùng của đoạn đường xoắn ốc là một tầng quan sát có khu vực vươn ra với những cửa số cao có thể quan sát khắp Tokyo. Tầng này chính thức nằm ở độ cao 451,2 mét và tạo thành điểm cao nhất của đài quan sát.
                            </p>
                        </div>

                        <div className='row'>
                            <h2>3. Đền Nezu</h2>
                            <figure className='design-2'>
                                <img src={Nezu} alt={"Đền Nezu"} />
                                <figcaption>
                                    <i>Đền Nezu</i>
                                </figcaption>
                            </figure>
                            <p>
                                Nếu là một người yêu thích văn hóa và thường du lịch Nhật Bản, chắc hẳn bạn sẽ biết đến ngôi đền ngàn cổng huyền thoại Fushimi Inari ở Kyoto. Và bạn có biết ở Tokyo tồn tại một đường hầm nhiều cổng torii tương tự như thế không? Hãy đến đền Nezu! Ngôi đền nằm gần công viên Ueno này sở hữu một trong những cảnh quan hấp dẫn trong thành phố. Khi đến đây, bạn sẽ thấy rất nhiều cổng torii xếp thành hàng dài, tạo nên một con đường màu đỏ rất đẹp. Nếu không có cơ hội bay vào Nam đến Kyoto để check-in đền Fushimi Inari, bạn vẫn có thể thay thế bằng cổng torii ở đền Nezu tại Tokyo.
                            </p>
                        </div>

                        <div className='row'>
                            <h2>4. Ga Shibuya</h2>
                            <figure className='design-1'>
                                <img src={Shibuya} alt={"Ga Shibuya"} />
                                <figcaption>
                                    <i>Ga Shibuya</i>
                                </figcaption>
                            </figure>
                            <p>
                                Shibuya là một trong điểm du lịch Tokyo nơi nổi tiếng nhất tại Nhật Bản với xu hướng thời trang đầy màu sắc và giải trí của Nhật Bản. Nhắc đến Shibuya chắc ít nhiều bạn cũng nhớ đến câu chuyện cảm động về chú chó trung thành mang tên Hachiko, nó đã ngồi ở cửa nhà ga Shibuya và chờ đợi chủ của mình ròng rã hơn 9 năm. Một địa điểm nổi bật không kém của Shibuya là ngã tư lớn với rất nhiều biển quảng cáo đầy màu sắc và màn hình video khổng lồ. Ở đây lúc nào cũng náo nhiệt, người qua lại tấp nập, có lẽ vì vậy mà Shibuya được ví như quãng trường thời đại của Tokyo.
                            </p>
                        </div>

                        <div className='row'>
                            <h2>5. Khu phố Anime Akihabara</h2>
                            <figure className='design-2'>
                                <img src={Akihabara} alt={"Phố Akihabar"} />
                                <figcaption>
                                    <i>Akihabara</i>
                                </figcaption>
                            </figure>
                            <p>
                                Với những FAN ANIME thì không thể biết tới con phố này. Akihabara là khu phố điện tử và đồ chơi nổi tiếng hàng đầu Tokyo với hàng trăm cửa hàng điện tử và đồ chơi lớn, nhỏ san sát nhau trên đường phố Chuo-dori. Ở đây có nhiều mặt hàng điện tử, từ máy vi tính, máy ảnh, tivi, điện thoại di động, đồ chơi, mô hình, thẻ bài nhân vật hoạt hình,... từ mới nhất cho đến các mặt hàng cũ được bày bán với giá rẻ. Tuy nhiên bạn cần lưu ý một số loại thiết bị điện tử chỉ sử dụng được ở Nhật Bản, bên cạnh cũng có một số cửa hàng bán thiết bị điện tử phiên bản quốc tế dành cho khách du lịch Tokyo Nhật Bản sử dụng ở nước ngoài, và miễn thuế dành cho du khách khi mua hàng trên 10.000 yên.
                            </p>
                        </div>

                        <div className='row'>
                            <h2>6. Công viên Tokyo Disney Sea</h2>
                            <figure className='design-1'>
                                <img src={TokyoDisneySea} alt="Công viên Tokyo Disney Sea" />
                                <figcaption>Tokyo Disney Sea</figcaption>
                            </figure>
                            <p>
                                Công viên Tokyo DisneySea được lấy cảm hứng từ những huyền thoại và truyền thuyết của biển, nó được phân chia thành 7 khu vực đặc trưng với những chủ đề khác nhau. Ở đây có nhiều trò chơi hấp dẫn cũng như các buổi biểu diễn đặc sắc thích hợp với mọi lứa tuổi dù lớn hay nhỏ. Điểm đặc biệt ở công viên này là tùy vào từng mùa mà có những chương trình khác nhau, dẫn đến lượt khách du lịch Tokyo hàng năm đổ về nhiều vô số kể.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Tokyo;