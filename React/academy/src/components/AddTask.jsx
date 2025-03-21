import { useState } from "react"
import Input from "./input"

function AddTask ({onTaskAdd}) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    
    return (
        <div className="bg-gray-800 p-6 shadow rounded-md flex flex-col space-y-4">
            <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Digite o titulo da tarefa" type="text" />
            <Input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Digite a descrição da tarefa" type="text" />
            <button
            onClick= {
                () => {
                    if (title.trim() == "" || description.trim() == ""){
                        return alert("Titulo ou descrição vazia")
                    }

                    onTaskAdd(title, description)
                    setTitle("")
                    setDescription("")
                }
            } 
            className="self-center bg-slate-950 w-[50%] text-center text-white p-4 font-semibold">
                Cadastrar
            </button>
        </div>
    )   
}

export default AddTask