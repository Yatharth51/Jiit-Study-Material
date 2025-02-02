import { Background } from "../../components/Background";
import { Card } from "../../components/Card";
import { useParams } from 'react-router-dom';
import { SubjectContent } from "./Sem6/SubjectContent";


export function SubjectPage(){
    const {subject} = useParams() ;

    const selectedSubject = SubjectContent.find((sub)=>sub.url===subject) ;
    

    if (!selectedSubject) {
        return <div>Subject not found</div>;
      }

    return (
        <Background>
            <div className="p-20 flex gap-8 flex-wrap">
                {selectedSubject.pyqs ? <a href={selectedSubject.pyqs}><Card title={"PYQs"}/></a> : null}
                {selectedSubject.slides?<a href={selectedSubject.slides}><Card title={"Slides"}/></a>:null}
                {selectedSubject.tutorials?<a href={selectedSubject.tutorials}><Card title={"Tutorials"}/></a>:null}
            </div>
        </Background>
    )
}