import React from "react";
import "../styles.css";

class Button extends React.Component {
  render() {
    return (
      <button className="btn btn-secondary" onClick={this.props.onClick}>
        {this.props.label}
      </button>
    );
  }
}
export default Button;
