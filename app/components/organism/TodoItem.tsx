import TodoActions from "../molecules/TodoActions";

type TodoItemProps = {
  item: string;
  index: number;
  editTask: (index: number) => void;
  deleteTask: (index: number) => void;
};
export default function TodoItem({
  item,
  index,
  editTask,
  deleteTask,
}: TodoItemProps) {
  return (
    <li className="flex items-start gap-4">
      <span className="mt-5 w-8 text-right text-lg font-bold text-slate-600">
        {index + 1}.
      </span>

      <div className="relative flex-1 rounded-2xl border border-gray-200 bg-white p-5 shadow-md transition hover:shadow-lg">
        <TodoActions
          onEdit={() => editTask(index)}
          onDelete={() => deleteTask(index)}
        />

        <p className="pr-24 text-lg font-medium text-slate-700 wrap-break-words">
          {item}
        </p>
      </div>
    </li>
  );
}