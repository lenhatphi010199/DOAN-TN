import React, { Component } from "react";
import '../../css/style.css'
import logo from '../../../images/logo_1.png'
import { Link } from "react-router-dom";
class Header extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row menu">
            <Link to="/">
              <img className="logo" src={logo} alt="" />
            </Link>
            <a href className="menu1">
              Trang Chủ
            </a>
            <a href className="menu1">
              Combo
            </a>
            <a href className="menu1">
              Dịch Vụ
            </a>
            <a href className="menu1">
              Đặt Lịch
            </a>
            <a href className="menu1">
              Tuyển Dụng
            </a>
            <a href className="menu1">
              Giới Thiệu
            </a>
          </div>
        </div>
        {/* end header */}
      </div>
    );
  }
}

export default Header;
