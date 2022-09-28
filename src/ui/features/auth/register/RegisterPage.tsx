import { Container, Title } from "@mantine/core";
import { MainShell } from "../../layout/MainShell";
import { useRegisterController } from "./controllers/registerController";
import { RegisterForm } from "./RegisterForm";

export function RegisterPage() {
  const registerController = useRegisterController();
  return (
    <MainShell>
      <Container size="xs">
        <Title order={1} mt={64} mb={32}>
          Crea un nuevo usuario
        </Title>
        <RegisterForm onSubmit={registerController} />
      </Container>
    </MainShell>
  );
}
