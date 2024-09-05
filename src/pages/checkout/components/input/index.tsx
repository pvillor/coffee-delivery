import { FieldError, UseFormRegister } from "react-hook-form";
import { Container, InputContainer } from "./styles";
import { FormInputs } from "../..";

interface InputProps {
  id:
    | "number"
    | "cep"
    | "street"
    | "fullAddress"
    | "neighborhood"
    | "city"
    | "state"
    | "paymentMethod";
  suffix?: string;
  placeholder?: string;
  columns: number;
  register: UseFormRegister<FormInputs>;
  error?: FieldError;
}

export function Input({
  id,
  suffix,
  placeholder,
  columns,
  register,
  error,
}: InputProps) {
  return (
    <Container columns={columns}>
      <InputContainer>
        <input placeholder={placeholder} {...register(id)} />
        {!!suffix && <span>{suffix}</span>}
      </InputContainer>
      {error && <span>{error.message}</span>}
    </Container>
  );
}
