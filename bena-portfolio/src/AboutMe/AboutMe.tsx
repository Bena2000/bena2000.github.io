import { Container } from './styles';

function AboutMe() {
  return (
    <Container>
      <div className="about">
        I am a second-year Master's student in Artificial Intelligence and Machine Learning at the Lodz University of Technology.
        I have been involved in game development for several years.
        For the past two years I have been particularly interested in AI development.
        I live in Lodz, Poland.
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
