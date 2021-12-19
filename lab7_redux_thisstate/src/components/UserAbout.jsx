import React from "react";
import "../styles.css";

class UserAbout extends React.Component {
  render() {
    var user = this.props;

    return (
      <div className="card-body p-1">
        <h6 className="card-title">{user.name}</h6>
        <span>{user.gender}</span>
        <p className="card-text">City: {user.city}</p>
        <p className="card-text">E-mail: {user.email}</p>
        <p className="card-text">Birthday: {user.birthday}</p>
        <p className="card-text">Age: {user.age}</p>
        <p className="card-text">Phone: {user.phone}</p>
      </div>
    );
  }
}

export default UserAbout;
