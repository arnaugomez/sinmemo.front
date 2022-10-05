import { CommonModule } from "../../../../common/commonModule";
import { waitFor } from "../../../../common/utils/promise";
import { IAuthRepository } from "../../domain/interface/IAuthRepository";
import { LoginModel } from "../../domain/models/LoginModel";
import { RegisterModel } from "../../domain/models/RegisterModel";

class AuthRepository implements IAuthRepository {
  private getHttpClient = CommonModule.IHttpClient;

  async register(input: RegisterModel): Promise<void> {
    const httpClient = await this.getHttpClient();
    await httpClient.post("register", input);
  }

  async login(input: LoginModel): Promise<void> {
    const httpClient = await this.getHttpClient();
    await httpClient.post("login", input);
  }
}

export const _authRepository = new AuthRepository();
