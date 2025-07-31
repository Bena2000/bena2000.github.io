import { Image, Name, Title } from './styles';
import image from "../assets/photo.png"
import AboutMe from '../AboutMe/AboutMe';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Welcome: React.FC = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="container-fluid">
                <Row xs={1} lg={2}>
                    <Col>
                        <Image>
                            <img src={image} alt="Piotr Bednarek" />
                        </Image>
                    </Col>
                    <Col>
                        <div>
                            <div className="text">
                                <p>Hello, I'm</p>
                                <Name>Piotr Bednarek</Name>
                                <Title>Software Engineer</Title>
                                <p>{new Date().getFullYear() - 2020} Year Experience</p>
                            </div>
                            <AboutMe />
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Welcome;
