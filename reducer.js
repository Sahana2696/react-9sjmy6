const globalState = {
  SignUp: {
    name: "",
    email: "",
    mobile: ""
  },
  Detail: {
  }
};
function reducer(state = globalState, action) {
  console.log("action", action);
  switch (action.type) {

    case "SIGNUP_DETAILS":

      return {
        ...state,
        Detail:action.details
      }
    default:
      return state;
  }
}
export default reducer; 