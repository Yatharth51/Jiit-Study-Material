import { ReactElement } from "react";


export function Background({children}:{children : ReactElement}){
    return (<div className="min-h-screen min-w-auto bg-black ">
        {children}
    </div>)
}