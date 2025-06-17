import { ReactElement } from "react";

export function Background({children}:{children : ReactElement}){
    return (
        <div className="min-h-screen bg-black flex flex-col">
            {children}
        </div>
    )
}