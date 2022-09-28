import { waitFor } from "../../../../common/utils/promise";
import { IAuthRepository } from "../../domain/interface/IAuthRepository";
import { LoginModel } from "../../domain/models/LoginModel";
import { RegisterModel } from "../../domain/models/RegisterModel";

class AuthRepository implements IAuthRepository {
  async login(input: LoginModel): Promise<void> {
    console.log(input);
    await waitFor(1500);
  }
  async register(input: RegisterModel): Promise<void> {
    console.log(input);
    await waitFor(1500);
  }
}

export const _authRepository = new AuthRepository();
