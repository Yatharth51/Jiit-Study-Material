import { Background } from "../../components/Background";
import { GenericTable } from "../../components/Table";
import { columns, CsFacultyData } from "./CSFacultyData";


export function CsFacultyInfo(){
    return (
    <Background>
        <div className="pb-16 h-screen">
            <div className="h-full overflow-y-auto">
                <GenericTable data={CsFacultyData} columns={columns}/>
            </div>
        </div>
    </Background>
    )
}