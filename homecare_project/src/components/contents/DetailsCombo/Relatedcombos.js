import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logo_1.png";
class Relatedcombos extends Component {
  render() {
    return (
      <div className="col-md-4 col-sm-4">
        <div className="products">
          <div className="thumbnail">
            <img className="imageCombo" src={this.props.image} alt="Product Name" />
          </div>
          <div className="productname">Tên Combo: {this.props.name}</div>
          <h4 className="price">Giá ComBo: {this.props.price} đ</h4>
          <Link to={`/detailsCombo/${this.props.id}`} className="button_group">
            <button className="button add-cart" type="button">
              Mua ComBo
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Relatedcombos;
