import { MainShell } from "../../layout/MainShell";
import { RegisterForm } from "./RegisterForm";

export function RegisterPage() {
  return (
    <MainShell>
      <RegisterForm
        onSubmit={function (values): Promise<void> {
          throw new Error("Function not implemented.");
        }}
      />
    </MainShell>
  );
}
