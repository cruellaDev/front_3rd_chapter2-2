type ButtonVariant =
  | 'primary' // 파란 배경
  | 'white' // 흰색 배경
  | 'success' // 초록색 배경
  | 'danger' // 빨간색 배경
  | 'gray' //회색 배경
  | 'empty'; // 없음

// 버튼 props 타입 정의
interface ButtonProps {
  title?: string;
  children?: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  children,
  variant = 'empty',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  ...props
}) => {
  const variantStyles = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    white: 'bg-white text-blue-600 hover:bg-blue-100',
    success: 'bg-green-500 text-white hover:bg-green-600',
    danger: 'bg-red-500 text-white hover:bg-red-600',
    gray: 'bg-gray-300 text-gray-800 hover:bg-gray-400',
    empty: '',
  };

  const baseStyle = 'rounded';
  return (
    <button
      type={type}
      className={`
        ${variantStyles[variant]}
        ${baseStyle}
        ${disabled ? 'cursor-not-allowed' : ''}
        ${className}
      `}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {title || children}
    </button>
  );
};
