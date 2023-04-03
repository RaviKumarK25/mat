export function userReducer(
  state = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,

  action
) {
  switch (action.type) {
    case "LOGIN":
      return action.payload;
    case "LOGOUT":
      return null;
    case "UPDATEPICTURE":
      return { ...state, picture: action.payload };
    case "VERIFY":
      return { ...state, verified: action.payload };
    default:
      return state;
  }
}
