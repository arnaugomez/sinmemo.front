import { AxiosError } from "axios";
import { useCallback } from "react";
import { AuthModule } from "../../../../../core/auth/AuthModule";
import { LoginModel } from "../../../../../core/auth/domain/models/LoginModel";
import { useShowErrorNotification } from "../../../../controllers/showErrorNotification";
import { LoginErrors } from "../models/LoginErrors";

export function useLoginController() {
  const showErrorNotification = useShowErrorNotification();
  return useCallback(
    async (values: LoginModel): Promise<LoginErrors> => {
      try {
        const LoginUseCase = await AuthModule.LoginUseCase();
        await LoginUseCase.call(values);
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
