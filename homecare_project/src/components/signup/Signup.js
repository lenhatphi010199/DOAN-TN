import React, { Component, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import "../css/1.css";
import logo from "../../images/logo_1.png";
import axios from "axios";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRedirect: false,
      role: ["user"],
      username: "",
      email: "",
      password: "",
      thongtin: "",
    };
  }

  submitForm = (event) => {
    event.preventDefault();
    this.setState({ isRedirect: false });
    var user = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      role: ["user"],
    };
    axios.post(`http://localhost:8080/api/auth/signup`, user).then((res) => {
      if (res.status === 200) {
        alert("đk thanh cong");
        console.log(res);
        console.log(res.data);
        this.setState({ isRedirect: true });
      } else {
        alert("Lỗi");
      }
    });
  };
  // lay noi dung text
  noidung = (event) => {
    // const tenContro = event.target.name;
    // const giatri = event.target.value;
    // console.log(tenContro);
    // console.log(giatri);
    // this.setState({ [tenContro]: giatri });
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
    if (event.target.name === "username") {
      if (event.target.value === "" || event.target.value === null) {
        this.setState({
          firstnameError: true,
        });
      } else {
        this.setState({
          firstnameError: false,
          firstname: event.target.value,
        });
      }
    }
    if (event.target.name === "email") {
      this.validateEmail(event.target.value);
    }
    if (event.target.name === "password2") {
      if (event.target.value !== this.state.password) {
        this.setState({
          passwordError: true,
        });
      } else {
        this.setState({
          passwordError: false,
          password: event.target.value,
        });
      }
    }
  };
  // lưu giá trị
  getGiaTri = () => {
    var thongtin = " ";
    thongtin += "Tên là:   " + this.state.username;
    thongtin += "  Email Là:   " + this.state.email;
    thongtin += "  Pass Là:   " + this.state.password;
    thongtin += "  Quyền :   " + this.state.role;
    return thongtin;
  };
  //validateEmail
  validateEmail(email) {
    const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
    const result = pattern.test(email);
    if (result === true) {
      this.setState({
        emailError: false,
        email: email,
      });
    } else {
      this.setState({
        emailError: true,
      });
    }
  }
  render() {
    if (this.state.isRedirect === true) {
      console.log(this.getGiaTri());
      return <Redirect to="/signin" />;
    }
    return (
      <div>
        <div className=" register">
          <div className="row">
            <div className="col-md-3 register-left">
              <Link className="home1" to="/">
                {" "}
                <i className="fas fa-home"></i> Quay Lại Trang Chủ
              </Link>
              <img src={logo} alt="" />
              <h3>Xin Chào</h3>
              <p>Nếu Bạn Đã Có Tài Khoản. Xin Hãy Đăng Nhập Tại Đây !</p>
              <Link className="submit1" to="/signin">
                Đăng Nhập
              </Link>
              <br />
            </div>
            <div className="col-md-9 register-right">
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <h3 className="register-heading">Đăng Ký Tài Khoản</h3>
                  <div className="row register-form">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="username"
                          placeholder="Nhập Họ Tên......"
                          onChange={(event) => this.noidung(event)}
                        />
                      </div>
                      {this.state.firstnameError ? (
                        <span className="style123">LÀM ƠN KHÔNG ĐỂ TRỐNG!</span>
                      ) : (
                        ""
                      )}
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control"
                          name="password"
                          placeholder="Nhập Mật Khẩu......."
                          onChange={(event) => this.noidung(event)}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group ab">
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="Nhập Email......."
                          onChange={(event) => this.noidung(event)}
                          required
                        />
                      </div>
                      {this.state.emailError ? (
                        <span className="style12">
                          LÀM ƠN NHẬP ĐÚNG ĐỊNH DẠNG CỦA EMAIL
                        </span>
                      ) : (
                        ""
                      )}
                      <div className="form-group ab">
                        <input
                          type="password"
                          name="password2"
                          className="form-control"
                          placeholder="Nhập Lại Mật Khẩu......."
                          onChange={(event) => this.noidung(event)}
                          required
                        />
                      </div>
                      {this.state.passwordError ? (
                        <span className="style12">
                          MẬT KHẨU NHẬP VÀO KHÔNG KHỚP!
                        </span>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="btnRegister">
                      <div
                        className="dk"
                        onClick={(event) => this.submitForm(event)}
                      >
                        Đăng Ký
                      </div>
                    </div>

                    <div className="btnchung">
                      <div className="btn1">
                        <i className="fab fa-facebook-f"></i>
                        Đăng nhập bằng tài khoản FaceBook
                      </div>
                      <div className="btn2">
                        <i className="fab fa-google"></i>
                        Đăng nhập bằng tài khoản Google
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
