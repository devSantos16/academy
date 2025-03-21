import { ChevronRightIcon, DeleteIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function onSeeDetailsClick(task, navigate) {
  const query = new URLSearchParams();
  
  query.set("title", task.title)
  query.set("description", task.description)
  
  navigate(`details?${query.toString()}`)
}

function Tasks({tasks, onTaskClick, onTaskRemove}) {
  const navigate = useNavigate()

  return (
    <ul className="space-y-2 bg-gray-800 p-6 rounded-md shadow">
      {tasks.map((task) => (
        <li key= {task.id} className="flex space-x-4">
          <button onClick={() => onTaskClick(task.id)} className={`flex bg-gray-950 w-full text-left text-white p-2 rounded-md ${task.isCompleted ? 'line-through' : ''}`} >
            {task.title}
          </button>
          <Button onClick={()=> onSeeDetailsClick(task, navigate)}>
            <ChevronRightIcon />
          </Button>
          <Button onClick={() => onTaskRemove(task.id)}>
            <DeleteIcon />
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks
