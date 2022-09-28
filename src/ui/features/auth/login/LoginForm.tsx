import { Button, Group, PasswordInput, TextInput } from "@mantine/core";
import { Form, Formik } from "formik";
import * as yup from "yup";
import { LoginModel } from "../../../../core/auth/domain/models/LoginModel";

interface ILoginForm {
  onSubmit(values: LoginModel): Promise<void>;
}

const initialValues: LoginModel = {
  email: "",
  password: "",
};

const schema = yup.object({
  // TODO poner literales de errores
  email: yup.string().required().email(),
  password: yup.string().required().min(8),
});

export function LoginForm({ onSubmit }: ILoginForm) {
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
            mb={48}
          />
          <Group position="right">
            <Button loading={p.isSubmitting} type="submit">
              Enviar
            </Button>
          </Group>
        </Form>
      )}
    </Formik>
  );
}
