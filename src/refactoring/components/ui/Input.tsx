// 공통 입력 필드 props 타입 정의
export interface BaseInputProps {
  id?: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  className?: string;
  labelClassName?: string;
  onChange?: (value: any) => void;
}

interface InputProps extends BaseInputProps {
  type: 'text' | 'number';
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  [key: string]: any;
}

export const Input: React.FC<InputProps> = ({
  id,
  type,
  label,
  placeholder,
  className = '',
  labelClassName = '',
  disabled = false,
  required = false,
  onChange,
  ...props
}) => {
  return (
    <>
      {label && (
        <label htmlFor={id} className={labelClassName ?? 'block'}>
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={className ?? 'w-full p-2 border rounded'}
        disabled={disabled}
        required={required}
        onChange={onChange}
        {...props}
      />
    </>
  );
};
