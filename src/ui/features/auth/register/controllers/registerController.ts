import { AxiosError } from "axios";
import { useCallback } from "react";
import { AuthModule } from "../../../../../core/auth/AuthModule";
import { RegisterModel } from "../../../../../core/auth/domain/models/RegisterModel";
import { useShowErrorNotification } from "../../../../controllers/showErrorNotification";
import { FormErrors } from "../../../../view-models/FormErrors";
import { RegisterErrors } from "../models/RegisterErrors";

export function useRegisterController() {
  const showErrorNotification = useShowErrorNotification();
  return useCallback(
    async (
      values: RegisterModel
    ): Promise<RegisterErrors> => {
      try {
        const registerUseCase = await AuthModule.RegisterUseCase();
        await registerUseCase.call(values);
      } catch (e) {
        if (e instanceof AxiosError && e.response.data.errors) {
          return e.response.data;
        }
        console.error(e);
        showErrorNotification();
      }
      return {};
    },
    [showErrorNotification]
  );
}
