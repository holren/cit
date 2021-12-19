import React from "react";

import UserAvatar from "./UserAvatar";
import Button from "./Button";
import UserAbout from "./UserAbout";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addToFriends } from "../js/actions.js";

import "../styles.css";

class UserCard extends React.Component {
  render() {
    var user = this.props;
    return (
      <div className="card m-2 p-0">
        <UserAvatar picture={user.picture} />
        <UserAbout
          name={user.name}
          gender={user.gender}
          city={user.city}
          email={user.email}
          birthday={user.birthday}
          age={user.age}
          phone={user.phone}
        />
        <Button
          label="Добавить в друзья"
          onClick={() => user.addToFriends(user)}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    friends: this.state
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ addToFriends }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(UserCard);
