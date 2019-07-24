const exampleInitialState = {
  count: 0
};

const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case "ActionLogIn":
      return Object.assign({}, state, {
        logedIn: true
      });
    case "ActionLogOut":
      return Object.assign({}, state, {
        logedIn: false
      });
    default:
      return state;
  }
};

export default reducer;
