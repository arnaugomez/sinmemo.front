import { _authRepository } from "./data/repositories/AuthRepository";
import { _registerUseCase } from "./domain/use-cases/RegisterUseCase";

/** Service locator for dependency injection of auth related use cases,
 *  services and repositories */
export const AuthModule = {
  IAuthRepository: () =>
    import("./data/repositories/AuthRepository").then((v) => v._authRepository),
  RegisterUseCase: () =>
    import("./domain/use-cases/RegisterUseCase").then(
      (v) => v._registerUseCase
    ),
};
