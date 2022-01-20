import { types } from "../types";

export const loginSuccess = (user) => ({
  type: types.LOGIN_SUCCESS,
  payload: user,
});

export const loginFailed = () => ({
  type: types.LOGIN_FAILURE,
});

export const logout = () => ({
  type: types.LOGOUT,
});
