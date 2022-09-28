import { Button } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";

export function MainHeaderNav() {
  const { route } = useRouter();
  if (route === "/login") {
    return null;
  }
  return (
    <nav>
      <Link href="/login" passHref>
        <Button variant="outline" component="a">
          Login
        </Button>
      </Link>
    </nav>
  );
}
