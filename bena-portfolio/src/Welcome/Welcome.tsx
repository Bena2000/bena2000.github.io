import { Container, Image } from './styles';
import image from "../assets/photo.png"
import AboutMe from '../AboutMe/AboutMe';

export const Welcome: React.FC = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <Container style={{ maxWidth: "70%" }}>
                <Image>
                    <img src={image} alt="Piotr Bednarek" />
                </Image>
                <div>
                    <div className="text">
                        <p>Hello, I'm</p>
                        <h1>Piotr Bednarek</h1>
                        <h3>Software Engineer</h3>
                        <p>{new Date().getFullYear() - 2020} Year Experience</p>
                    </div>
                    <AboutMe />
                </div>
            </Container>
        </div>
    );
}

export default Welcome;
