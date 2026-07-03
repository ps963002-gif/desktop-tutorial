type InputProps = {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
  onEnter: () => void;
};

export default function Input({
  value,
  placeholder,
  onChange,
  onEnter,
}: InputProps) {
  return (
    <input
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          onEnter();
        }
      }}
      className="flex-1 rounded-xl bg-white px-5 py-4 text-slate-700 shadow-md outline-none focus:ring-4 focus:ring-indigo-200"
    />
  );
}