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
      <Button onClick={onEdit} title="Edit" variant="primary">
        <FiEdit2 size={16} />
      </Button>

      <Button onClick={onDelete} title="Delete" variant="danger">
        <FiTrash2 size={16} />
      </Button>
    </div>
  );
}