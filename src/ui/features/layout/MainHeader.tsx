import { Button, Container, Header, Title } from "@mantine/core";
import Link from "next/link";
import { MainHeaderNav } from "./MainHeaderNav";

export function MainHeader() {
  return (
    <Header height={60}>
      <Container
        size="md"
        sx={{
          height: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link href="/">
          <Title order={2} size="h2" color="blue" sx={{ cursor: "pointer" }}>
            sinmemo
          </Title>
        </Link>
        <MainHeaderNav />
      </Container>
    </Header>
  );
}
