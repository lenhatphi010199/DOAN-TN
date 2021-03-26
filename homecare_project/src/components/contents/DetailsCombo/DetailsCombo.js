import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router";
import Footer from "./Footer";
import Header from "./Header";
import { Link } from "react-router-dom";
import Relatedcombos from "./Relatedcombos";
function DetailsCombo() {
  let { id } = useParams();
  const [data, setData] = useState([]);
  const [url, setUrl] = useState("http://localhost:8080/api/v1/combo");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useState(() => {
    try {
      const fetchData = async () => {
        setIsError(false);
        setIsLoading(true);
        try {
          const result = await axios.get(url);
          setData(result.data.data);
        } catch (error) {
          setIsError(true);
        }
        setIsLoading(false);
      };

      fetchData();
    } catch (err) {
      console.log({ err });
    }
  }, [url]);

  return (
    <div>
      <Header />
      <div className="container">
        {data.map((item) => {
          if (id == item.id) {
            return (
              <div className="products-details">
                <div className="preview_image">
                  <div className="preview-small">
                    <img className="imageDetail" src={item.image} alt="" />
                  </div>
                </div>
                <div className="products-description">
                  <h5 className="name">Tên Combo: {item.name}</h5>
                  <hr className="border" />
                  <div className="price">
                    Giá Combo :
                    <span className="new_price">
                      {item.price}
                      <sup>$</sup>
                    </span>
                  </div>
                  <hr className="border" />
                  <div className="price">
                    Thời Hạn Combo :
                    <span className="new_price">{item.time}</span>
                  </div>
                  <hr className="border" />
                  <h5 className="name">Thông Tin Chi Tiết : {item.information}</h5>
                  <hr className="border" />
                  <div className="wided">
                    <div className="button_group">
                      <button className="button">Đặt Mua</button>
                    </div>
                  </div>

                  <img src="images/share.png" alt="" className="pull-right" />
                </div>
                <div className="clearfix"></div>
                <div className="clearfix"></div>

                <div className="container">
                  <div className="new_price2">ComBo Liên Quan</div>
                  <hr className="border" />
                  <div id="productsDetails" className="hot-products">
                    <ul id="hot">
                      <li>
                        <div className="row">
                          {data.map((value, key) => {
                            if (id != value.id) {
                              if (key <= 2) {
                                key++;
                                return (
                                  <Relatedcombos
                                    name={value.name}
                                    price={value.price}
                                    image={value.image}
                                    id ={value.id}
                                  >
                                  </Relatedcombos>
                                  
                                );
                              }
                            }
                          })}
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
      <Footer />
    </div>
  );
}

export default DetailsCombo;
