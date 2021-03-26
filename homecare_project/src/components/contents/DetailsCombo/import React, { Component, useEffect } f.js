import React, { Component, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import logo from "../../../images/logo_1.png";
import { useParams } from "react-router-dom";



class DetailsCombo extends Component {
  constructor(props) {
    super(props);
  } 
  componentDidMount(){
    let {id} = useParams();
    console.log(id);
  }  
  render() {
    return (
      <div>
        <Header />
        <div className="col-12">
          <div className="products-details">
            <div className="preview_image">
              <div className="preview-small">
                <img
                  id="zoom_03"
                  src={logo}
                  data-zoom-image="images/products/Large/products-01.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="products-description">
              <h5 className="name">Tên COMBO</h5>
              <p>
                Mô Tả : Ông Lê Quang Tự Do cho hay, ngay ngày hôm qua (10.3),
                Cục đã yêu cầu TikTok và YouTube chặn, gỡ các clip của Thơ
                Nguyễn có dấu hiệu vi phạm. Ông Tự Do cho biết, hiện Cục đang
                phối hợp với Cục An ninh chính trị nội bộ (A03) thuộc Bộ Công An
                mời chủ kênh Thơ Nguyễn lên làm việc về dấu hiệu vi phạm truyền
                bá mê tín dị đoan. “Tiếp đó chúng tôi sẽ xử lý theo quy định”,
                ông Lê Quang Tự Do nói.
              </p>
              <hr className="border" />
              <div className="price">
                Price :
                <span className="new_price">
                  450.00
                  <sup>$</sup>
                </span>
                <span className="old_price">
                  450.00
                  <sup>$</sup>
                </span>
              </div>
              <hr className="border" />
              <div className="wided">
                <div className="button_group">
                  <button className="button">Đặt Mua</button>
                </div>
              </div>
              <img src="images/share.png" alt="" className="pull-right" />
            </div>
          </div>
          <div className="clearfix"></div>
          <div className="clearfix"></div>
          <div id="productsDetails" className="hot-products">
            <ul id="hot">
              <li>
                <div className="row">
                  <div className="col-md-4 col-sm-4">
                   
                  </div>
                  <div className="col-md-4 col-sm-4">
                    <div className="products">
                      <div className="offer">- %20</div>
                      <div className="thumbnail">
                        <img src={logo} alt="Product Name" />
                      </div>
                      <div className="productname">
                        Iphone 5s Gold 32 Gb 2013
                      </div>
                      <h4 className="price">$451.00</h4>
                      <div className="button_group">
                        <button className="button add-cart" type="button">
                          Mua ComBo
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-4">
                    <div className="products">
                      <div className="offer">- %20</div>
                      <div className="thumbnail">
                        <img src={logo} alt="Product Name" />
                      </div>
                      <div className="productname">
                        Iphone 5s Gold 32 Gb 2013
                      </div>
                      <h4 className="price">$451.00</h4>
                      <div className="button_group">
                        <button className="button add-cart" type="button">
                          Mua ComBo
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="clearfix"></div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default DetailsCombo;
