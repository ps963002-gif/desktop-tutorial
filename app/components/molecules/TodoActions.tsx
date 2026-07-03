import { FiEdit2, FiTrash2 } from "react-icons/fi";
import IconButton from "../atoms/IconButton";

type TodoActionsProps = {
  onEdit: () => void;
  onDelete: () => void;
};

export default function TodoActions({
  onEdit,
  onDelete,
}: TodoActionsProps) {
  return (
    <div className="absolute top-4 right-4 flex gap-2">
      <IconButton
        icon={<FiEdit2 size={16} />}
        onClick={onEdit}
        title="Edit"
        className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100 text-blue-600 transition hover:bg-blue-600 hover:text-white"
      />

      <IconButton
        icon={<FiTrash2 size={16} />}
        onClick={onDelete}
        title="Delete"
        className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-100 text-red-600 transition hover:bg-red-600 hover:text-white"
      />
    </div>
  );
}