import React, { Component } from "react";
import {  NavLink } from "react-router-dom";
class News extends Component {
  render() {
    return (
      <div className="col-4">
        <div className="card text-left khoitong">
          <NavLink to={"/detailsNewsService/"+ this.props.tieude + "." + this.props.id}>
            <img className="card-img-top hinh12" src={this.props.hinh} />
          </NavLink>
          <div className="card-body">
            <h4 className="card-title">{this.props.tieude}</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
