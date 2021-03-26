import React from "react";
import { useParams } from "react-router";
import Footer from "../../footers/Footer";
import Header from "../DetailsCombo/Header";
import dl from "../newService/JsonService.json";
import { Link } from "react-router-dom";
const DetailsNewServices = () => {
  var { id } = useParams();

  return (
    <div>
      <Header />
      {dl.map((value, key) => {
        if (id === value.id) {
          return (
            <div className="container-fluid tongluon">
              <div className="row khoi1">
                <h1 className="tieude2">{value.title}</h1>
                <img src={value.img1} alt className="hinh1" />
                <h1 className="tieude3">{value.nguyenhan1}</h1>
                <img src={value.img2} alt className="hinh2" />
                <p className="mota1">{value.ldnn1}</p>
                <h2 className="tieude3">{value.ldnn2}</h2>
                <img src={value.img3} alt className="hinh2" />
                <p className="mota1">{value.mota}</p>
              </div>
              <hr />
            </div>
          );
        }
      })}

      <h1 className="tieude3">Tin Liên Quan</h1>
      <div className="row">
        {dl.map((value, key) => {
          if (id != value.id) {
            if (key <= 6) {
              key++;
              return (
                <div className="col-4">
                  <div className="card text-left">
                    <Link
                      to={"/detailsNewsService/" + value.title + "." + value.id}
                    >
                      <img
                        className="card-img-top hinh4"
                        src={value.img1}
                        alt
                      />
                    </Link>
                    <div className="card-body">
                      <h4 className="card-title">{value.title}</h4>
                    </div>
                  </div>
                </div>
              );
            }
          }
        })}
      </div>
      <Footer />
    </div>
  );
};

export default DetailsNewServices;
