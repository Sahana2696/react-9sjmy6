const intiState = {
  SignUp:{

  }

};
function reducer(state = intiState, action) {
  switch (action.type) {
    case "SIGNUP_DETAILS":
      return state.SignUp = action.details;
    default:
      return state;
  }
}
export default reducer;