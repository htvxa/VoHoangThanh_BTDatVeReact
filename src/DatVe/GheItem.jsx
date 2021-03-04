import React, { Component } from "react";
var classNames = require("classnames");
class GheItem extends Component {
  state = {
    isBooking: false,
  };
  themGhe = () => {
    this.props.addToList(this.props.data);
    this.setState({
      isBooking: true,
    });
  };
  render() {
    var btnClass = classNames({
      btn: true,
      "btn-success": this.state.isBooking,
      "btn-secondary": !this.state.isBooking,
      "btn-danger": this.props.data.TrangThai,
    });
    return (
      <div>
        <button onClick={this.themGhe} className={btnClass}>
          {this.props.data.SoGhe}
        </button>
      </div>
    );
  }
}

export default GheItem;
