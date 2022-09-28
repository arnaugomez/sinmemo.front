import { LoginModel } from "../models/LoginModel";
import { RegisterModel } from "../models/RegisterModel";

export interface IAuthRepository {
  register(input: RegisterModel): Promise<void>;
  login(input: LoginModel): Promise<void>;
}
