import univeristy from "../assets/university.png"
import { EduactionTime, EducationContainer, FieldOfStudy, UniversityName } from "./styles"

interface Props {
    fieldOfStudy: string,
    universityName: string,
    time: string
}

export const EducationTile: React.FC<Props> = ({ fieldOfStudy, universityName, time }) => {
    return (
        <EducationContainer>
            <img
                src={univeristy}
                alt={universityName}
                style={{ width: "50px", height: "50px" }}
            />
            <div>
                <FieldOfStudy>{fieldOfStudy}</FieldOfStudy>
                <UniversityName>{universityName}</UniversityName>
                <EduactionTime>{time}</EduactionTime>
            </div>
        </EducationContainer>
    )
}