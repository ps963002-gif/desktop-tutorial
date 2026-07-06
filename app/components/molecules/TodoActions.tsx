import { FiEdit2, FiTrash2 } from "react-icons/fi";
import Button from "../atoms/Button";

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
      <Button
        onClick={onEdit}
        title="Edit"
        className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100 text-blue-600 transition hover:bg-blue-600 hover:text-white"
      >
        <FiEdit2 size={16} />
      </Button>
      <Button
        onClick={onDelete}
        title="Delete"
        className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-100 text-red-600 transition hover:bg-red-600 hover:text-white"
      >
        <FiTrash2 size={16} />
      </Button>
    </div>
  );
}