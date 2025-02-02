import { useParams } from "react-router-dom"
import { Background } from "../../components/Background";
import { Semester6content } from "./Sem6/Semester6content";

export function SemesterMainPage() {
    const { semesterId } = useParams();

    const getSemesterContent = (semester: string) => {
        switch (semester) {
            case "1":
                return <p>Content for Semester 1</p>;
            case "2":
                return <p>Content for Semester 2</p>;
            case "3":
                return <p>Content for Semester 3</p>;
            case "4":
                return <p>Content for Semester 4</p>;
            case "5":
                return <p>Content for Semester 5</p>;
            case "6":
                return <Semester6content/>;
            case "7":
                return <p>Content for Semester 7</p>;
            case "8":
                return <p>Content for Semester 8</p>;
            default:
                return <p>Invalid Semester</p>;
        }
    }


    return (
        <Background>
            {getSemesterContent(semesterId!)}
        </Background>

    )
}