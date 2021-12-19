export const addToFriends = (user) => {
  return {
    type: "addToFriends",
    payload: {
      name: user.name,
      phone: user.email,
      photo: user.picture
    }
  };
};
export const deleteFromFriends = (friend) => {
  return {
    type: "deleteFromFriends",
    payload: friend
  };
};

export async function createUsers() {
  var users = [];
  for (var i = 0; i <= 10; i++) {
    await fetch("https://randomuser.me/api/").then(function (responce) {
      responce.json().then(function (data) {
        users.push(data);
      });
    });
  }
  return users;
}
