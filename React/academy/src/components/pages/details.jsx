import { useNavigate, useSearchParams } from "react-router-dom"

function DetailsPage() {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const title = searchParams.get("title")
    const description = searchParams.get("description")
    
    return (
        <div className="w-screen h-screen bg-gray-900 p-6 flex justify-center items-start">
            <div className="w-[500px] bg-gray-800 space-y-6 h-auto p-6 flex flex-col justify-center text-center text-white">
                <h1 className="text-3xl">{title}</h1>
                <p>{description}</p>
                <button className="bg-gray-950 w-45 p-4 self-center" onClick={()=>navigate("/")}>Back</button>
            </div>
        </div>  
    )
    
}

export default DetailsPage