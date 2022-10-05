import { Container, Title } from "@mantine/core";
import { FormikHelpers } from "formik";
import { useCallback } from "react";
import { LoginModel } from "../../../../core/auth/domain/models/LoginModel";
import { MainShell } from "../../layout/MainShell";
import { useLoginController } from "./controllers/loginController";
import { LoginForm } from "./LoginForm";
import { loginErrorsToFormikErrors } from "./presenters/loginErrorsToFormikErrors";

export function LoginPage() {
  const loginController = useLoginController();
  const handleSubmit = useCallback(
    async (values: LoginModel, helpers: FormikHelpers<LoginModel>) => {
      const response = await loginController(values);
      if (response.errors) {
        helpers.setErrors(loginErrorsToFormikErrors(response));
      }
    },
    [loginController]
  );
  return (
    <MainShell>
      <Container size="xs">
        <Title order={1} mt={64} mb={32}>
          Inicia sesión
        </Title>
        <LoginForm onSubmit={handleSubmit} />
      </Container>
    </MainShell>
  );
}
