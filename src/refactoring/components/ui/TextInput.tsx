import { memo } from "react";
import { BaseInputProps, Input } from "./Input";

// 텍스트 입력 필드 props
interface TextInputProps extends BaseInputProps {
  maxLength?: number;
  minLength?: number;
  value?: string;
}

export const TextInput: React.FC<TextInputProps> = memo((props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange?.(e.target.value);
  };

  return <Input type="text" onChange={handleChange} {...props} />;
});