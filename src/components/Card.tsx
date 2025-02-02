
export function Card(props : {
    title : string
}){
    return (
    
    <div className="text-amber-50 bg-linear-to-t from-sky-500 to-indigo-500 transition duration-300 min-h-56 max-w-56 min-w-56 rounded-xl flex justify-center items-center hover:cursor-pointer hover:from-sky-600 hover:to-indigo-600 text-xl">
        <h1 className="text-center">{props.title}</h1>
    </div>
    )
}