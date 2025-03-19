import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import "./App.css"
import { useState } from "react";

function App() {
  const [tasks] = useState([
    {
      id: 1,
      title: "Sla"
    }
  ])

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="font-bold text-3xl text-center">Gerenciador de tarefas</h1>
        <AddTask />
        <Tasks tasks={tasks} />
      </div>
    </div>
    
  );
}


export default App
