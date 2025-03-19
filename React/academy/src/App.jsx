import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import "./App.css"
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Fazer um filho",
      isCompleted: false
    },
    {
      id: 2,
      title: "Ter um irmão",
      isCompleted: false
    }
  ])

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

  return (
    <div className="w-screen h-screen bg-gray-900 flex justify-center p-6">
      <div className="w-[600px] space-y-6">
        <h1 className="font-bold text-3xl text-center text-white">Gerenciador de tarefas</h1>
        <AddTask />
          <Tasks tasks={tasks} onTaskClick = {onTaskClick} onTaskRemove = {onTaskRemove}/>
      </div>
    </div>
    
  );
}


export default App
