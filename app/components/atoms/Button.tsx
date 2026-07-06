import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "danger";

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const variants = {
  primary:
    "flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100 text-blue-600 transition hover:bg-blue-600 hover:text-white",

  secondary:
    "flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100 text-gray-600 transition hover:bg-gray-600 hover:text-white",

  danger:
    "flex h-9 w-9 items-center justify-center rounded-lg bg-red-100 text-red-600 transition hover:bg-red-600 hover:text-white",
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={`${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}