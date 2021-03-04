import React, { Component } from "react";
import GheItem from "./GheItem";

class DanhSachGhe extends Component {
  renderList() {
    const list = this.props.data.map((item) => {
      return (
        <div className="col-3" key={item.SoGhe}>
          <GheItem addToList={this.props.addToList} data={item} />
        </div>
      );
    });
    return list;
  }

  render() {
    return (
      <div>
        <h1>Tài xế</h1>
        <div className="row">{this.renderList()}</div>
      </div>
    );
  }
}

export default DanhSachGhe;
