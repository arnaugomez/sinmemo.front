import { RegisterErrors } from "../models/RegisterErrors";

const registerErrorsMap = {
  userExists: "Este usuario ya existe",
};

export function registerErrorsToFormikErrors(e: RegisterErrors) {
  return {
    email: registerErrorsMap[e.errors!.email],
  };
}
