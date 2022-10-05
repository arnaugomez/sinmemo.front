export interface FormErrors<T extends string | number | symbol = string> {
  errors?: Record<T, string>;
}
