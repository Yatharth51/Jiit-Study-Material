import { Background } from "../../components/Background";
import { GenericTable } from "../../components/Table";
import { columns, TnpData } from "./TnpData";


export function TnpInfo(){
    return (
    <Background>
        <div className="pb-16 h-screen">
            <div className="h-full overflow-y-auto">
                <GenericTable data={TnpData} columns={columns}/>
            </div>
        </div>
    </Background>
    )
}