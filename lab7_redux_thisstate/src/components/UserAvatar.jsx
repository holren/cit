import React from "react";

import "../styles.css";

class UserAvatar extends React.Component {
  render() {
    var picture = this.props.picture;
    return <img src={picture} className="card-img-top" alt="userAvatar" />;
  }
}

export default UserAvatar;
