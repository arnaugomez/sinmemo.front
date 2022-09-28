import { Button, Group, PasswordInput, TextInput } from "@mantine/core";
import { Form, Formik } from "formik";
import * as yup from "yup";
import { RegisterModel } from "../../../../core/auth/domain/models/RegisterModel";

interface IRegisterForm {
  onSubmit(values: RegisterModel): Promise<void>;
}

const initialValues: RegisterModel = {
  email: "",
  password: "",
};

const schema = yup.object({
  // TODO poner literales de errores
  email: yup.string().required().email(),
  password: yup.string().required().min(8),
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
