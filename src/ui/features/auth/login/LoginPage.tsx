import { Container, Title } from "@mantine/core";
import { MainShell } from "../../layout/MainShell";
import { useLoginController } from "./controllers/loginController";
import { LoginForm } from "./LoginForm";

export function LoginPage() {
  const loginController = useLoginController();
  return (
    <MainShell>
      <Container size="xs">
        <Title order={1} mt={64} mb={32}>
          Inicia sesión
        </Title>
        <LoginForm onSubmit={loginController} />
      </Container>
    </MainShell>
  );
}
