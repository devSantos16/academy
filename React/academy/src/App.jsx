import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import "./App.css"
import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState(
    () => {
      const savedTasks = localStorage.getItem("tasks");
      return JSON.parse(savedTasks) || []
    }
  );

  function onTaskClick(taskId) {
    const newTasks = tasks.map(task => {
      
      if(task.id == taskId){
        task.isCompleted = !task.isCompleted
        return task
      }

      return task
    })

    setTasks(newTasks)
  }

  function onTaskRemove(taskId) {
    const newTask = tasks.filter(task => task.id != taskId)
    setTasks(newTask)
  }

  function onTaskAdd(title, description) {
    const newTask = {
      id: tasks.length + 1,
      title: title,
      description: description,
      isCompleted: false
    }

    setTasks([...tasks, newTask])
  }

  useEffect(()=>{
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  // Api call
  // useEffect(()=>{
  //   
  //   async function setDataTasks() {
  //     const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
  //     const data = await response.json() 
  //     setTasks(() => {
  //       const tasks  = data.map(item => ({
  //         id: item.id,
  //         title: item.title,
  //         description: item.body,
  //         isCompleted: false,
  //       }))
  //       console.log(tasks)
  //       return tasks
  //     })
  //   }

  //   setDataTasks()

  // }, [])

  return (
    <div className="w-screen h-screen bg-gray-900 flex justify-center p-6">
      <div className="w-[600px] space-y-6">
        <h1 className="font-bold text-3xl text-center text-white">Gerenciador de tarefas</h1>
        <AddTask onTaskAdd= {onTaskAdd} />
        <Tasks tasks={tasks} onTaskClick = {onTaskClick} onTaskRemove = {onTaskRemove}/>
      </div>
    </div>
  );
}


export default App
