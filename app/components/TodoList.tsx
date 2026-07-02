"use client";

import { useState, useEffect } from "react";

export default function TodoList() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function addTask() {
    const trimmedTask = task.trim();

    if (trimmedTask.length < 3) {
      alert("Task must contain at least 3 characters.");
      return;
    }

    const taskExists = tasks.some(
      (item, index) =>
        item.toLowerCase() === trimmedTask.toLowerCase() &&
        index !== editIndex
    );

    if (taskExists) {
      alert("This task already exists.");
      return;
    }

    if (editIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = trimmedTask;
      setTasks(updatedTasks);
      setEditIndex(null);
    } else {
      setTasks([...tasks, trimmedTask]);
    }

    setTask("");
  }

  function deleteTask(index: number) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  function editTask(index: number) {
    setTask(tasks[index]);
    setEditIndex(index);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-indigo-100 to-purple-100 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl rounded-3xl bg-white/60 backdrop-blur-xl p-10 shadow-2xl border border-white">

        <h1 className="mb-8 text-center text-5xl font-bold text-slate-900">
          📝 My Todo List
        </h1>

        <div className="flex gap-4">
          <input
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addTask();
              }
            }}
            placeholder="Enter your task"
            className="flex-1 rounded-xl bg-white px-5 py-4 text-slate-700 shadow-md outline-none focus:ring-4 focus:ring-indigo-200"
          />

          <button
            onClick={addTask}
            disabled={task.trim().length < 3}
            className="rounded-xl bg-indigo-600 px-6 py-4 font-semibold text-white transition hover:bg-indigo-700 disabled:bg-gray-300"
          >
            {editIndex !== null ? "Update" : "Add"}
          </button>
        </div>

        <h2 className="mt-10 mb-4 text-xl font-semibold text-slate-800">
          Your Tasks
        </h2>

        <ul className="space-y-4">
          {tasks.map((item, index) => (
            <li
              key={index}
              className="flex items-center justify-between rounded-2xl bg-white p-5 shadow-md"
            >
              <span className="text-lg text-slate-700">
                {index + 1}. {item}
              </span>

              <div className="flex gap-3">
                <button
                  onClick={() => editTask(index)}
                  className="rounded-xl bg-blue-100 px-4 py-2 text-blue-600 transition hover:bg-blue-600 hover:text-white"
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteTask(index)}
                  className="rounded-xl bg-red-100 px-4 py-2 text-red-600 transition hover:bg-red-600 hover:text-white"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
}