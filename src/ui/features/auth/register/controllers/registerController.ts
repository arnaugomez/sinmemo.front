import { useCallback } from "react";
import { AuthModule } from "../../../../../core/auth/AuthModule";
import { RegisterModel } from "../../../../../core/auth/domain/models/RegisterModel";
import { useShowErrorNotification } from "../../../../controllers/showErrorNotification";

export function useRegisterController() {
  const showErrorNotification = useShowErrorNotification();
  return useCallback(
    async (values: RegisterModel) => {
      try {
        const registerUseCase = await AuthModule.RegisterUseCase();
        await registerUseCase.call(values);
      } catch (e) {
        console.error(e);
        showErrorNotification();
      }
    },
    [showErrorNotification]
  );
}
