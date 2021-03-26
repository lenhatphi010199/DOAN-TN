import React, { Component } from "react";
import Footer from "../../contents/DetailsCombo/Footer";
import Headers from "../DetailsCombo/Header";
import "../../css/style2.css";
import dl from "./JsonService.json";
import News from "./News";
class NewsService extends Component {
  render() {
    return (
      <div>
        <Headers />
        <div>
          <hr />
          <div className="container-fluid tongluon">
            <div className="row">
              <div className="title">
                <h1 className="tieude">
                  HomeCare – Trung tâm sửa chữa thiết bị bếp tại nhà tại Đà
                  Nẵng. Sửa thiết bị gia dụng giá rẻ, đặt lợi ích và quyền lợi
                  của khách hàng lên hàng đầu
                </h1>
                <ul>
                  <li>
                    {" "}
                    Nếu bạn đang ở Hà Nội và có nhu cầu sữa chữa, bảo hành các
                    thiết bị bếp. Bạn đừng ngại khoảng cách xa, chúng tôi sẽ cử
                    nhân viên kĩ thuật đến tận nhà cho quý khách hàng nhanh
                    nhất.
                  </li>
                  <li>
                    Với phương châm “một chữ tín – vạn niềm tin”, Dịch vụ sửa
                    chữa thiết bị bếp uy tín, chuyên nghiệp – Kitcare cam kết sẽ
                    mang đến sự hài lòng quý khách hàng.
                  </li>
                  <li>
                    {" "}
                    Tư vấn báo giá sữa chữa bếp vui lòng liên hệ trung tâm dịch
                    vụ sửa chữa đồ gia dụng Kitcare theo Hotline: 070 2446 344
                  </li>
                </ul>
              </div>
            </div>
            <hr />
            <div className="row">
              {dl.map((value, key) => {
                return (
                  <News
                    hinh= {value.img1}
                    tieude={value.title}
                    id = {value.id}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default NewsService;
