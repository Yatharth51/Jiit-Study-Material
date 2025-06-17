import { Background } from "../components/Background"
import { Card } from "../components/Card"
import {Link } from "react-router-dom"

const Cards :{to : string, title : string}[] = [
    {
        to : "/StudyMaterial",
        title : "Study Material"
    },
    {
        to : "/AdminInfo",
        title : "Admin Information"
    },
    {
        to : "/BioTechFacultyInfo",
        title : "Biotechnology Faculty Information"
    },
    {
        to : "/EceFacultyInfo",
        title : "Ece Faculty Information"
    },
    {
        to : "/CsFacultyInfo",
        title : "Cs Faculty Information"
    },
    {
        to : "/TnpInfo",
        title : "Tnp Information"
    },
    
]

export function HomePage(){
    return (
    <div>
        <Background>
        <div className="p-20 flex gap-8 flex-wrap">

        {Cards.map((val,index)=>(
            <Link to ={val.to} key={index}>
            <Card title = {val.title}/>
            </Link>
        ))}

        </div>
        </Background>
    </div>
    )
}