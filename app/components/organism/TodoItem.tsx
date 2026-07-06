"use client";

import { useState } from "react";
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
  const [showFull, setShowFull] = useState(false);

  return (
    <li>
      <div className="relative flex items-start rounded-2xl border border-gray-200 bg-white p-5 shadow-md transition hover:shadow-lg">
        
        <span className="mr-4 mt-1 text-lg font-bold text-slate-600">
          {index + 1}.
        </span>

        <div className="flex-1 pr-24">
          <p className="text-lg font-medium text-slate-700 break-words">
            {showFull || item.length <= 40
              ? item
              : `${item.slice(0, 40)}...`}
          </p>

          {item.length > 40 && (
            <button
              onClick={() => setShowFull(!showFull)}
              className="mt-2 text-sm font-medium text-indigo-600 hover:underline"
            >
              {showFull ? "Show Less" : "Read More"}
            </button>
          )}
        </div>

        <TodoActions
          onEdit={() => editTask(index)}
          onDelete={() => deleteTask(index)}
        />
      </div>
    </li>
  );
}