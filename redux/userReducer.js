import produce from "immer";

export default function reducer(state = {}, action) {
  switch (action.type) {
    case "login":
      return produce(state, (newState) => {
        newState.email = action.payload.email;
        newState.password = action.payload.password;
      });

    case "validation":
      return produce(state, (newState) => {
        newState.emailError = action.payload.emailError;
        newState.passwordError = action.payload.passwordError;
      });

    default:
      return state;
  }
}
