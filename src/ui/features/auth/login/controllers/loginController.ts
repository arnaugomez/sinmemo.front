import { useCallback } from "react";
import { AuthModule } from "../../../../../core/auth/AuthModule";
import { LoginModel } from "../../../../../core/auth/domain/models/LoginModel";
import { useShowErrorNotification } from "../../../../controllers/showErrorNotification";

export function useLoginController() {
  const showErrorNotification = useShowErrorNotification();
  return useCallback(
    async (values: LoginModel) => {
      try {
        const LoginUseCase = await AuthModule.LoginUseCase();
        await LoginUseCase.call(values);
      } catch (e) {
        console.error(e);
        showErrorNotification();
      }
    },
    [showErrorNotification]
  );
}
