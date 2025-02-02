import { Link } from "react-router-dom";
import { Background } from "../../../components/Background";
import { Card } from "../../../components/Card";
import { SubjectContent } from './SubjectContent';



export function Semester6content(){
    return (
        <Background>
            <div className="p-20 flex gap-8 flex-wrap">

            {SubjectContent.map((obj)=>( obj.pyqs ?<Link to={obj.url}> <Card title = {obj.title} /> </Link> : null))}

            </div>
        </Background>
    )
}