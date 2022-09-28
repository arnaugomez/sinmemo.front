import { AuthModule } from "../../AuthModule";
import { LoginModel } from "../models/LoginModel";

class LoginUseCase {
  private getAuthRepository = AuthModule.IAuthRepository;

  async call(input: LoginModel) {
    const authRepository = await this.getAuthRepository();
    return await authRepository.login(input);
  }
}

export const _loginUseCase =  new LoginUseCase();
