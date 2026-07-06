import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "danger";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
  children?: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const variants = {
  primary:
    "rounded-lg bg-blue-100 text-blue-600 transition hover:bg-blue-600 hover:text-white",
  secondary:
    "rounded-lg bg-gray-100 text-gray-600 transition hover:bg-gray-600 hover:text-white",

  danger:
    "rounded-lg bg-red-100 text-red-600 transition hover:bg-red-600 hover:text-white",
};

const sizes = {
  sm: "h-8 w-8 text-sm",
  md: "h-9 w-9 text-base",
  lg: "h-11 w-11 text-lg",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={`flex items-center justify-center ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {icon}
      {children && <span>{children}</span>}
    </button>
  );
}