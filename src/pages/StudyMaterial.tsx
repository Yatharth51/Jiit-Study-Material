import { Background } from "../components/Background"
import { Card } from "../components/Card"
import { Link } from "react-router-dom"

export function StudyMaterial(){
    return (<div>
        <Background>
        <div className="p-20 flex gap-8 flex-wrap">
        {/* <Link to="/StudyMaterial/Semester/1">
            <Card title="Semester 1" />
          </Link>
          <Link to="/StudyMaterial/Semester/2">
            <Card title="Semester 2" />
          </Link>
          <Link to="/StudyMaterial/Semester/3">
            <Card title="Semester 3" />
          </Link>
          <Link to="/StudyMaterial/Semester/4">
            <Card title="Semester 4" />
          </Link>
          <Link to="/StudyMaterial/Semester/5">
            <Card title="Semester 5" />
          </Link> */}
          <Link to="/StudyMaterial/Semester/6">
            <Card title="Semester 6" />
          {/* </Link>
          <Link to="/StudyMaterial/Semester/7">
            <Card title="Semester 7" />
          </Link>
          <Link to="/StudyMaterial/Semester/8">
            <Card title="Semester 8" /> */}
          </Link>
        </div>
        </Background>
    </div>)
}