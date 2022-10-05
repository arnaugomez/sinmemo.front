import { Container, Title } from "@mantine/core";
import { FormikHelpers } from "formik";
import { useCallback } from "react";
import { RegisterModel } from "../../../../core/auth/domain/models/RegisterModel";
import { MainShell } from "../../layout/MainShell";
import { useRegisterController } from "./controllers/registerController";
import { registerErrorsToFormikErrors } from "./presenters/registerErrorsToFormikErrors";
import { RegisterForm } from "./RegisterForm";

export function RegisterPage() {
  const registerController = useRegisterController();

  const handleSubmit = useCallback(
    async (values: RegisterModel, helpers: FormikHelpers<RegisterModel>) => {
      const response = await registerController(values);
      if (response.errors) {
        helpers.setErrors(registerErrorsToFormikErrors(response));
      }
    },
    [registerController]
  );
  return (
    <MainShell>
      <Container size="xs">
        <Title order={1} mt={64} mb={32}>
          Crea un nuevo usuario
        </Title>
        <RegisterForm onSubmit={handleSubmit} />
      </Container>
    </MainShell>
  );
}
