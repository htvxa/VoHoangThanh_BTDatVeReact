import React, { Component } from "react";

class DanhSachGheDangDat extends Component {
  xoaItem = () => (item) => {
    this.props.removeItem(item);
  };

  renderChooseList() {
    const list = this.props.data.map((item) => {
      return (
        <div key={item.SoGhe}>
          <span>{`Ghế ${item.TenGhe} $${item.Gia}`}</span>
          <button onClick={this.xoaItem(item)}>Hủy</button>
        </div>
      );
    });
    return list;
  }

  render() {
    return (
      <div>
        <div>{this.renderChooseList()}</div>
      </div>
    );
  }
}

export default DanhSachGheDangDat;
