import React, { Component } from "react";
import '../../css/style.css'
import logo from '../../../images/logo_1.png'
class Footer extends Component {
  render() {
    return (
      <div>
        <div className="contariner-fluid">
          <div className="row footer col-12">
            <div className="col-3 logo1a">
              <img className=" col-12 logo1" src={logo}alt="" />
            </div>
            <div className="col-3">
              <h1 className="chude">Liên Hệ </h1>
              <ul>
                <li>Địa Chỉ : 03-Quang Trung</li>
                <li>Số Điện Thoại: 0702446340</li>
                <li>Email: homecare@gmail.com</li>
              </ul>
            </div>
            <div className="col-2">
              <h1 className="chude">Đối Tác</h1>
              <ul>
                <li>SongHanFix</li>
                <li>TheGioiDiDong</li>
                <li>DienMayXanh</li>
                <li>HoangHomeFix</li>
              </ul>
            </div>
            <div className="col-4">
              <h1 className="chude">GoogleMap</h1>
              <div className="map col-12">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15335.270755668405!2d108.2259013!3d16.07494765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1615449516742!5m2!1svi!2s"
                  width="400px"
                />
              </div>
            </div>
          </div>
          <div className="hrr">.</div>
          <div className="container-fluid footer">
            <div className="coppy">
              Copyright © 2021. Designed by HOMECARE . All rights reseved
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
