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
        variant="primary"
        size="md"
        icon={<FiEdit2 size={16} />}
        onClick={onEdit}
        title="Edit"
      />

      <Button
        variant="danger"
        size="md"
        icon={<FiTrash2 size={16} />}
        onClick={onDelete}
        title="Delete"
      />
    </div>
  );
}