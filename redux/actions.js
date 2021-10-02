export const loginAction = (payload) => ({
  type: "login",
  payload: {
    email: payload.email,
    password: payload.password,
  },
});

export function validation(payload) {
  return {
    type: "validation",
    payload: {
      emailError: payload.emailError,
      passwordError: payload.passwordError,
    },
  };
}
