import { MainShell } from "../../layout/MainShell";

interface RegisterFormValues {
  email: string;
  password: string;
}

interface IRegisterForm {
  onSubmit(values: RegisterFormValues): Promise<void>;
}

export function RegisterForm({ onSubmit }: IRegisterForm) {
  return <>Regisdter form</>;
}
