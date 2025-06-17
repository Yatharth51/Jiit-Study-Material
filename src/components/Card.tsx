export function Card(props : {
    title : string
}){
    return (
        <div className="text-amber-50 bg-gradient-to-br from-sky-600 to-indigo-700 
            transition-all duration-300 min-h-56 max-w-56 min-w-56 rounded-xl 
            flex justify-center items-center hover:cursor-pointer 
            hover:from-sky-700 hover:to-indigo-800 hover:shadow-xl
            text-xl p-6 shadow-md">
            <h1 className="text-center font-medium">{props.title}</h1>
        </div>
    )
}