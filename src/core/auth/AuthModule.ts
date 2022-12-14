import { IAuthRepository } from "./domain/interface/IAuthRepository";

/** Service locator for dependency injection of auth related use cases,
 *  services and repositories */
export const AuthModule = {
  IAuthRepository: (): Promise<IAuthRepository> =>
    import("./data/repositories/AuthRepository").then((v) => v._authRepository),
  RegisterUseCase: () =>
    import("./domain/use-cases/RegisterUseCase").then(
      (v) => v._registerUseCase
    ),
  LoginUseCase: () =>
    import("./domain/use-cases/LoginUseCase").then((m) => m._loginUseCase),
};
