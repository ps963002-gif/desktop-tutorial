"use client";

import { useState, useEffect } from "react";
import Header from "./Header";
import TodoInput from "../molecules/TodoInput";
import TodoItem from "./TodoItem";
export default function TodoList() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [error, setError] = useState("");

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
      setError("Task must contain at least 3 characters.");
      return;
    }

    const taskExists = tasks.some(
      (item, index) =>
        item.toLowerCase() === trimmedTask.toLowerCase() &&
        index !== editIndex
    );

    if (taskExists) {
      setError("This task already exists.");
      return;
    }

    setError("");

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

    if (editIndex === index) {
      setTask("");
      setEditIndex(null);
      setError("");
    }
  }
  function editTask(index: number) {
    setTask(tasks[index]);
    setEditIndex(index);
    setError("");
  }

  function clearError() {
    setError("");
  }
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-100 via-indigo-100 to-purple-100 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl rounded-3xl bg-white/60 backdrop-blur-xl p-10 shadow-2xl border border-white">
        <Header />
        <TodoInput
          task={task}
          setTask={setTask}
          addTask={addTask}
          editIndex={editIndex}
          clearError={clearError}
        />

        {error && (
          <p className="mt-2 text-sm font-medium text-red-600">
            {error}
          </p>
        )}

        <h2 className="mt-10 mb-4 text-xl font-semibold text-slate-800">
          Your Tasks
        </h2>

        <ul className="space-y-5">
          {tasks.map((item, index) => (
            <TodoItem
              key={index}
              item={item}
              index={index}
              editTask={editTask}
              deleteTask={deleteTask}
            />
          ))}
        </ul>

      </div>
    </div>
  );
}