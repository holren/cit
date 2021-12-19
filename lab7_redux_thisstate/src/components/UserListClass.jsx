import React from "react";
import Button from "./Button";
import UserCard from "./UserCard";
import { createUsers } from "../js/actions";
import "../styles.css";

class UserListClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = async () => {
    const loader = document.querySelector(".loader");
    const showLoader = () => loader.classList.remove("loader-hide");
    const hideLoader = () => loader.classList.add("loader-hide");
    showLoader();
    this.setState({ users: await createUsers() });
    hideLoader();
  };
  render() {
    if (this.state.users.length === 0) {
      return (
        <div>
          <Button onClick={this.handleClick} label="Показать пользователей" />
          <div className="loader loader-hide"></div>
        </div>
      );
    } else {
      return (
        <div>
          <Button onClick={this.handleClick} label="Показать пользователей" />
          <div className="loader loader-hide"></div>
          <div className="row">
            <div className="d-flex flex-wrap justify-content-around">
              <UserList users={this.state.users} />
            </div>
          </div>
        </div>
      );
    }
  }
}

class UserList extends React.Component {
  render() {
    var options = { year: "numeric", month: "long", day: "numeric" };
    if (this.props.users) {
      var listUsers = this.props.users.map((u) => (
        <UserCard
          picture={u["results"]["0"]["picture"]["large"]}
          name={
            u["results"]["0"]["name"]["title"] +
            " " +
            u["results"]["0"]["name"]["first"] +
            " " +
            u["results"]["0"]["name"]["last"]
          }
          gender={u["results"]["0"]["gender"]}
          city={u["results"]["0"]["location"]["city"]}
          email={u["results"]["0"]["email"]}
          birthday={new Date(
            u["results"]["0"]["dob"]["date"]
          ).toLocaleDateString("en-US", options)}
          age={u["results"]["0"]["dob"]["age"]}
          phone={u["results"]["0"]["phone"]}
          key={u["results"]["0"]["phone"]}
        />
      ));
      return listUsers;
    } else {
      return <div />;
    }
  }
}

export default UserListClass;
