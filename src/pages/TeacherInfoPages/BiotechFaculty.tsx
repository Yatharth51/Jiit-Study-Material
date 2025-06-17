import { Background } from "../../components/Background";
import { GenericTable } from "../../components/Table";
import { BiotechFacultyData, columns } from "./BioTechFacultyData";

export function BioTechFacultyInfo(){
    return (
    <Background>
        <div className="pb-16 h-screen">
            <div className="h-full overflow-y-auto">
                <GenericTable data={BiotechFacultyData} columns={columns}/>
            </div>
        </div>
    </Background>
    )
}