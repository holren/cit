import React from "react";
import UserListClass from "./components/UserListClass";
import BestFriendsList from "./components/BestFriendsList";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="container-fluid">
      <h1>
      Вывод пользователей
      </h1>
        <UserListClass />
        <BestFriendsList />
      </div>
    </div>
  );
}
