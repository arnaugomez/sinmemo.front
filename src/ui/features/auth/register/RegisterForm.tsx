import { RegisterFormValues } from "./view-models/RegisterFormValues";
import { Form, Formik } from "formik";
import * as yup from "yup";
import { Button, PasswordInput, TextInput } from "@mantine/core";

interface IRegisterForm {
  onSubmit(values: RegisterFormValues): Promise<void>;
}

const initialValues: RegisterFormValues = {
  email: "",
  password: "",
  repeatPassword: "",
};

const schema = yup.object({
  // TODO poner literales de errores
  email: yup.string().required().email(),
  password: yup.string().required().min(8),
  repeatPassword: yup
    .string()
    .required()
    .test(
      "repeatPassword",
      "Password must match",
      (value, context) => value === context.parent.password
    ),
});

export function RegisterForm({ onSubmit }: IRegisterForm) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={schema}
    >
      {(p) => (
        <Form onSubmit={p.handleSubmit}>
          <TextInput
            label="Email"
            placeholder="Tu correo electrónico"
            withAsterisk
            value={p.values.email}
            name="email"
            onChange={p.handleChange}
            error={p.touched.email && p.errors.email}
            mb={16}
          />
          <PasswordInput
            label="Contraseña"
            placeholder="Escribe tu contraseña"
            withAsterisk
            value={p.values.password}
            name="password"
            onChange={p.handleChange}
            error={p.touched.password && p.errors.password}
            mb={16}
          />
          <PasswordInput
            label="Repetir contraseña"
            placeholder="Repite tu contraseña"
            withAsterisk
            value={p.values.repeatPassword}
            name="repeatPassword"
            onChange={p.handleChange}
            error={p.touched.repeatPassword && p.errors.repeatPassword}
            mb={32}
          />
          <Button loading={p.isSubmitting} type="submit">
            Enviar
          </Button>
        </Form>
      )}
    </Formik>
  );
}
