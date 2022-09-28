import { waitFor } from "../../../../common/utils/promise";
import { IAuthRepository } from "../../domain/interface/IAuthRepository";
import { RegisterModel } from "../../domain/models/RegisterModel";

class AuthRepository implements IAuthRepository {
  async register(input: RegisterModel): Promise<void> {
    console.log(input);
    await waitFor(1500);
  }
}

export const _authRepository = new AuthRepository;