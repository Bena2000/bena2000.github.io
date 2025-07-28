import { EducationTile } from './EducationTile';
import { Container, EduactionSection, Title } from './styles';

export const AboutMe: React.FC = () => {
  return (
    <Container>
      <div style={{ lineHeight: "1.5" }} className="about">
        <p>➥ Second-year Master's student of <b>AI and Machine Learning </b></p>
        <p>➥ Involved in game development for several years.</p>
        <p>➥ Particularly interested in AI development.</p>
        <p>➥ Lodz, Poland.</p>
      </div>
      <Title>Education:</Title>
      <EduactionSection>
        <EducationTile
          fieldOfStudy='Artificial Intelligence and Machine Learning'
          universityName='Lodz University of Technology, Lodz'
          time='February 2023 - Present'
        />

        <EducationTile
          fieldOfStudy='Computer Science'
          universityName='Lodz University of Technology, Lodz'
          time='October 2019 - February 2023'
        />
      </EduactionSection>
    </Container>
  );
}

export default AboutMe;
