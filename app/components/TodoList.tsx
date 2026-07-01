"use client";
import { useState, useEffect } from "react";
import "./style.css";
export default function TodoList() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if(savedTasks){
      setTasks(JSON.parse(savedTasks));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem(
      "tasks",
      JSON.stringify(tasks)
    );
  }, [tasks]);
  function addTask(){
    if(task.trim() === "") return;
    if(editIndex !== null){
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = task;
      setTasks(updatedTasks);
      setEditIndex(null);
    }
    else{
      setTasks([...tasks, task]);
    }
    setTask("");

  }
  function deleteTask(index:number){
    const updatedTasks = tasks.filter((_,i)=>i !== index);
    setTasks(updatedTasks);
  }

  function editTask(index:number){
    setTask(tasks[index]);
    setEditIndex(index);

  }
  return (

    <div className="container">

      <h1>📝 My Todo List</h1>
      <div className="inputBox">
      <input
      value={task}
      onChange={(e)=>setTask(e.target.value)}
      placeholder="Enter your task"
      />
      <button 
className="addBtn" 
onClick={addTask}
disabled={task.trim() === ""}
>
{editIndex !== null ? "Update" : "Add"}
</button>
      </div>
      <h2>Your Tasks</h2>
      <ul>
      {
      tasks.map((item,index)=>(
        <li key={index}>
          <span>
            {index+1}. {item}
          </span>
          <div>
          <button
          className="editBtn"
          onClick={()=>editTask(index)}
          >
          Edit
          </button>
          <button
          className="deleteBtn"
          onClick={()=>deleteTask(index)}
          >
          Delete
          </button>
          </div>
        </li>
      ))
      }
      </ul>
    </div>
  );

}