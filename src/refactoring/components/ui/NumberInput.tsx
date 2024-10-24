import { memo } from "react";
import { BaseInputProps, Input } from "./Input";

// 숫자 입력 필드 props
interface NumberInputProps extends BaseInputProps {
  min?: number;
  max?: number;
  step?: number;
  value?: number;
}

export const NumberInput: React.FC<NumberInputProps> = memo((props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange?.(Number(e.target.value));
  };

  return <Input type="number" onChange={handleChange} value={props.value || 0} {...props} />;
});