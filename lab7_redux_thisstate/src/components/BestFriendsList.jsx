import React, { Component } from "react";
import { connect } from "react-redux";
import BestFriendCard from "./BestFriendsCard";

class BestFriendsList extends Component {
  render() {
    return (
      <div>
        <hr />
        <h2>Друзья:</h2>
        <div className="d-flex flex-wrap justify-content-around">
          {this.props.friends.map((user) => (
            <BestFriendCard friend={user} key={user.name} />
          ))}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    friends: state.friends
  };
}

export default connect(mapStateToProps)(BestFriendsList);
