import { Container } from './styles';

export const AboutMe: React.FC = () => {
  return (
    <Container>
      <div style={{ lineHeight: "1.5" }} className="about">
        <p>➥ Second-year Master's student of <b>AI and Machine Learning </b></p>
        <p>➥ Involved in game development for several years.</p>
        <p>➥ Particularly interested in AI development.</p>
        <p>➥ Lodz, Poland.</p>
      </div>
      <div className="education">
        <h3>Education:</h3>
        <h4> Artificial Intelligence and Machine Learning </h4>
        <p>Lodz University of Technology, Lodz</p>
        <p>February 2023 - Present</p>

        <h4> Computer Science </h4>
        <p>Lodz University of Technology, Lodz</p>
        <p>October 2019 - February 2023</p>
      </div>
    </Container>
  );
}

export default AboutMe;
