import { ChevronRightIcon, DeleteIcon } from "lucide-react";

function Tasks({tasks, onTaskClick, onTaskRemove}) {
  return (
    <ul className="space-y-2 bg-gray-800 p-6 rounded-md shadow">
      {tasks.map((task) => (
        <li key= {task.id} className="flex space-x-4">
          <button onClick={() => onTaskClick(task.id)} className={`flex bg-gray-950 w-full text-left text-white p-2 rounded-md ${task.isCompleted ? 'line-through' : ''}`} >
            {task.title}
          </button>
          <button className="bg-gray-950  text-white p-2 rounded-md">
            <ChevronRightIcon />
          </button>
          <button onClick={() => onTaskRemove(task.id)} className="bg-gray-950  text-white p-2 rounded-md">
            <DeleteIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks
