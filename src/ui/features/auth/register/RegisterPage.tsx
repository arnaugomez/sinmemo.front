import { Container, Title } from "@mantine/core";
import { AuthModule } from "../../../../core/auth/AuthModule";
import { MainShell } from "../../layout/MainShell";
import { RegisterForm } from "./RegisterForm";

export function RegisterPage() {
  return (
    <MainShell>
      <Container size="xs">
        <Title order={1} mt={64} mb={32}>
          Crea un nuevo usuario
        </Title>
        <RegisterForm
          onSubmit={async (values) => {
            const registerUseCase = await AuthModule.RegisterUseCase();
            await registerUseCase.call(values);
            console.log("user created");
          }}
        />
      </Container>
    </MainShell>
  );
}
