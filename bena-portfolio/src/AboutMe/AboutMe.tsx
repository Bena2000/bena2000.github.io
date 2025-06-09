import { Container, Image } from './styles';
import image from "../assets/photo.png"

function AboutMe() {
  return (
    <Container>
      <Image>
        <img src={image} alt="Piotr Bednarek" />
      </Image>
      <div className="text">
        <p>Hello, I'm</p>
        <h1>Piotr Bednarek</h1>
        <h3>Software Engineer</h3>
        <p className="small-resume">{new Date().getFullYear() - 2020} Year Experience</p>
      </div>
    </Container>
  );
}

export default AboutMe;
