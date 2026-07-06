type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
  title?: string;
};

export default function Button({
  children,
  onClick,
  disabled,
  className = "",
  title,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      title={title}
      className={className}
    >
      {children}
    </button>
  );
}