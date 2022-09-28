import { RegisterModel } from "../models/RegisterModel";

export interface IAuthRepository {
  register(input: RegisterModel): Promise<void>;
}
