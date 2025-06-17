import { Background } from "../../components/Background";
import { GenericTable } from "../../components/Table";
import { columns, EceFacultyData2 } from "./EceFacultyData";


export function EceFacultyInfo(){
    return (
    <Background>
        <div className="pb-16 h-screen">
            <div className="h-full overflow-y-auto">
                <GenericTable data={EceFacultyData2} columns={columns}/>
            </div>
        </div>
    </Background>
    )
}