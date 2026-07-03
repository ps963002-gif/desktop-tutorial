type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
};

export default function Button({
  children,
  onClick,
  disabled,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="rounded-xl bg-indigo-600 px-6 py-4 font-semibold text-white transition hover:bg-indigo-700 disabled:bg-gray-300"
    >
      {children}
    </button>
  );
}