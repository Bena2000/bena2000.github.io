import { ProgramTile } from "./ProgramTile";
import { Container } from "./styles";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import fuzzylib from "../assets/fuzzylib.png"

export const Programs: React.FC = () => {
  return (
    <Container>
      <h2>Software ✦ Library ✦ Projects</h2>
      <div className="container-fluid">
        <Row sm={1} lg={2}>
          <Col>
            <ProgramTile
              title="Kuzushiji-49 ENCODER/DECODER"
              description="Group project developed during the master's degree. The project aimed to try to read handwriting written using unknown symbols. Based on unsupervised learning methods such as autoencoders. The system had to convert text written in an unknown alphabet into the Latin alphabet."
              image=""
              technologies={["Python", "PyTorch", "PyQt5"]} />
          </Col>
          <Col>
            <ProgramTile
              title="Python fuzzy library"
              description="The project developed during the master's degree, implementing custom fuzzy model using the numpy library."
              image={fuzzylib}
              technologies={["Python", "Numpy"]} />
          </Col>
        </Row>
      </div>
    </Container>
  )
}

export default Programs;
