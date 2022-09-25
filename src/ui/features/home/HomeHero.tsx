import {
  Container,
  List,
  Space,
  Spoiler,
  Title,
  Text,
  Button,
  Center,
} from "@mantine/core";
import Link from "next/link";

function HomeHero() {
  return (
    <Container size="md" sx={{ paddingTop: 100 }}>
      <Title order={2} color="blue6" size={100} sx={{ lineHeight: 1.1 }}>
        Te ahorra tiempo <br />
        de estudio
      </Title>
      <Space h="xl" />
      <Container>
        <Spoiler maxHeight={110} showLabel="Ver más" hideLabel="Ver menos">
          <List spacing="sm" sx={{ marginBottom: 12 }}>
            <List.Item>
              <Text component="span" color="blue" weight={500}>
                Convierte tus apuntes en flashcards
              </Text>{" "}
              ¡Automáticamente!
            </List.Item>
            <List.Item>Hace del estudio un videojuego</List.Item>
            <List.Item>Te paga por estudiar</List.Item>
            <List.Item>Te ayuda a memorizar</List.Item>
            <List.Item>Encuentra tu comunidad</List.Item>
            <List.Item>
              Comparte tus apuntes y flashcards con otros estudiantes
            </List.Item>
          </List>
        </Spoiler>
        <Center sx={{ height: 200 }}>
          <Link href="/register" passHref>
            <Button component="a" size="lg">
              Regístrate
            </Button>
          </Link>
        </Center>
      </Container>
    </Container>
  );
}

export default HomeHero;
