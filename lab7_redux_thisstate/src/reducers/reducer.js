const State = {
  friends: []
};

export default function allReducers(state = State, action) {
  if (action.type === "addToFriends") {
    const i =
      JSON.stringify(state.friends).indexOf(JSON.stringify(action.payload)) !==
      -1;
    if (!i)
      return {
        ...state,
        friends: [...state.friends, action.payload]
      };
  }
  if (action.type === "deleteFromFriends") {
    return {
      ...state,
      friends: state.friends.filter((friends) => friends !== action.payload)
    };
  }
  return state;
}
