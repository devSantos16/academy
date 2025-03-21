function Input({value, onChange, placeholder, type}) {
    return (
        <input value={value} onChange={onChange} placeholder={placeholder} type={type} className="bg-white p-2 border border-slate-300"/>
    )
}


export default Input