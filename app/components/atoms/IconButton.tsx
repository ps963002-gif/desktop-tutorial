type IconButtonProps = {
  icon: React.ReactNode;
  onClick: () => void;
  className: string;
  title: string;
};

export default function IconButton({
  icon,
  onClick,
  className,
  title,
}: IconButtonProps) {
  return (
    <button
      onClick={onClick}
      className={className}
      title={title}
    >
      {icon}
    </button>
  );
}