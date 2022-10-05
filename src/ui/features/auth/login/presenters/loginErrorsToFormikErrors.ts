import { LoginErrors } from "../models/LoginErrors";

const loginErrorsMap = {
  userDoesNotExist: "userDoesNotExist",
  invalidPassword: "invalidPassword",
};

export function loginErrorsToFormikErrors(e: LoginErrors) {
  return {
    email: loginErrorsMap[e.errors!.email],
    password: loginErrorsMap[e.errors!.password],
  };
}
