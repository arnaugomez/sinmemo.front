import { Container, Header, Title } from "@mantine/core";

export function MainHeader() {
  return (
    <Header height={60}>
      <Container
        size="md"
        sx={{ height: 60, display: "flex", alignItems: "center" }}
      >
        <Title order={1} size="h2" color="blue">
          sinmemo
        </Title>
      </Container>
    </Header>
  );
}
