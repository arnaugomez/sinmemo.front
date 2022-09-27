import { RegisterModel } from "../../../../../core/domain/models/RegisterModel";

export interface RegisterFormValues extends RegisterModel {
  repeatPassword: string;
}
