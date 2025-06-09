import { Body, Container, Footer, Header, Project, Projects } from "./styles";

function Programs() {
  return (
    <Container>
      <h2>Software/Library Projects</h2>
      <Projects>

        <Project>
          <Header>
            <div className="project-links">
            </div>
          </Header>
          <Body>
            <h3>Kuzushiji-49 ENCODER/DECODER</h3>
            <p>
              <a>
                Group project developed during the master's degree. The project aimed to try to read handwriting written using unknown symbols. Based on unsupervised learning methods such as autoencoders. The system had to convert text written in an unknown alphabet into the Latin alphabet.
              </a>
            </p>
          </Body>
          <Footer>
            <ul className="tech-list">
              <li>Python</li>
              <li>PyTorch</li>
              <li>PyQt5</li>
            </ul>
          </Footer>
        </Project>
        <Project>
          <Header>
            <div className="project-links">
            </div>
          </Header>
          <Body>
            <h3>Python fuzzy library</h3>
            <p>
              <a>
                The project developed during the master's degree, implementing custom fuzzy model using the numpy library.
              </a>
            </p>
          </Body>
          <Footer>
            <ul className="tech-list">
              <li>Python</li>
              <li>Numpy</li>
            </ul>
          </Footer>
        </Project>
      </Projects>
    </Container>
  )
}

export default Programs;
