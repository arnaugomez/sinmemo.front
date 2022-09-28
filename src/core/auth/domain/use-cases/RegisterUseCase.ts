import { AuthModule } from "../../AuthModule";
import { RegisterModel } from "../models/RegisterModel";

class RegisterUseCase {
  private getAuthRepository = AuthModule.IAuthRepository;

  async call(input: RegisterModel) {
    const authRepository = await this.getAuthRepository();
    return await authRepository.register(input);
  }
}

export const _registerUseCase = new RegisterUseCase();
