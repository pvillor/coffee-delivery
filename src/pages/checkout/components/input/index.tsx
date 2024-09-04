import { InputContainer } from "./styles";

interface InputProps {
  suffix?: string;
  placeholder?: string;
  populateColumns: number;
}

export function Input({ suffix, placeholder, populateColumns }: InputProps) {
  return (
    <InputContainer populateColumns={populateColumns}>
      <input type="text" placeholder={placeholder} />
      {!!suffix && <span>{suffix}</span>}
    </InputContainer>
  );
}
