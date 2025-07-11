import { ProgramTile } from "./ProgramTile";
import { Container, Projects } from "./styles";

export const Programs: React.FC = () => {
  return (
    <Container>
      <h2>Software ✦ Library ✦ Projects</h2>
      <Projects>
        <ProgramTile
          title="Kuzushiji-49 ENCODER/DECODER"
          description="Group project developed during the master's degree. The project aimed to try to read handwriting written using unknown symbols. Based on unsupervised learning methods such as autoencoders. The system had to convert text written in an unknown alphabet into the Latin alphabet."
          image=""
          technologies={["Python", "PyTorch", "PyQt5"]} />

        <ProgramTile
          title="Python fuzzy library"
          description="The project developed during the master's degree, implementing custom fuzzy model using the numpy library."
          image=""
          technologies={["Python", "Numpy"]} />
      </Projects>
    </Container>
  )
}

export default Programs;
