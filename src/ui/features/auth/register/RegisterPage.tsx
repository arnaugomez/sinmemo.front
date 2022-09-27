import { Container, Space, Title } from "@mantine/core";
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
          onSubmit={async function (values): Promise<void> {
            console.log(values);
          }}
        />
      </Container>
    </MainShell>
  );
}
