import { RegisterModel } from "../../../../../core/auth/domain/models/RegisterModel";

export interface RegisterFormValues extends RegisterModel {
  repeatPassword: string;
}
