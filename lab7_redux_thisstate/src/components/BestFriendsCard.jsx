import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { deleteFromFriends } from "../js/actions";

import UserAvatar from "./UserAvatar";
import Button from "./Button";
import "../styles.css";

class BestFriendCard extends Component {
  render() {
    var user = this.props;
    return (
      <div className="card m-2 p-0">
        <UserAvatar picture={user.friend.photo} />
        <div className="card-body p-0">
          <div className="p-1">
            <h6 className="card-title">{user.friend.name}</h6>
          </div>
        </div>
        <Button
          label="Удалить из друзей"
          onClick={() => user.deleteFromFriends(user.friend)}
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
  return bindActionCreators({ deleteFromFriends }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(BestFriendCard);
