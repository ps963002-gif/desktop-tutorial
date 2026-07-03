import Button from "../atoms/Button";
import Input from "../atoms/Input";

type TodoInputProps = {
  task: string;
  setTask: (value: string) => void;
  addTask: () => void;
  editIndex: number | null;
  clearError: () => void;
};

export default function TodoInput({
  task,
  setTask,
  addTask,
  editIndex,
  clearError,
}: TodoInputProps) {
  return (
    <div className="flex gap-4">
      <Input
        value={task}
        placeholder="Enter your task"
        onChange={(value) => {
          setTask(value);
          clearError();
        }}
        onEnter={addTask}
      />

      <Button
        onClick={addTask}
        disabled={task.trim().length < 3}
      >
        {editIndex !== null ? "Update" : "Add"}
      </Button>
    </div>
  );
}