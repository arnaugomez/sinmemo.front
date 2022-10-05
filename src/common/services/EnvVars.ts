import { IEnvVars } from "../interfaces/IEnvVars";

class EnvVars implements IEnvVars {
  baseUrl: "http://localhost:8000/";
}
export const envVars = new EnvVars();
