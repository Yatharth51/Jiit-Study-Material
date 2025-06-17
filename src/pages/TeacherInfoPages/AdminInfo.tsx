import { Background } from "../../components/Background";
import { GenericTable } from "../../components/Table";
import { adminData, columns } from "./AdminData";

export function AdminInfo() {
    return (
        <Background>
            <div className="px-4 pb-16 h-screen">
                <div className="h-full overflow-y-auto">
                    <div className="overflow-x-auto">
                        <GenericTable data={adminData} columns={columns} />
                    </div>
                </div>
            </div>
        </Background>
    );
}