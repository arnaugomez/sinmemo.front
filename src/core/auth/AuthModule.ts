import { _authRepository } from "./data/repositories/AuthRepository";
import { _registerUseCase } from "./domain/use-cases/RegisterUseCase";

export const AuthModule = {
  IAuthRepository: () =>
    import("./data/repositories/AuthRepository").then((v) => v._authRepository),
  RegisterUseCase: () =>
    import("./domain/use-cases/RegisterUseCase").then(
      (v) => v._registerUseCase
    ),
};
