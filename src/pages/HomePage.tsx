import { Background } from "../components/Background"
import { Card } from "../components/Card"
import {Link } from "react-router-dom"

export function HomePage(){
    return (
    <div>
        <Background>
        <div className="p-20 flex gap-8 flex-wrap">

        <Link to={'/StudyMaterial'}>
        <Card title = "Study Material"/>
        </Link>

        {/* <Link to={'/FacultyInfo'}>
        <Card title = "Faculty Information"/>
        </Link> */}
        </div>
        </Background>
    </div>
    )
}