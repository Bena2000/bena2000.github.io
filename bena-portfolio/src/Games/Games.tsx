import { Body, Container, Footer, Header, Project, Projects } from "./styles";
import split from "../assets/split.png"
import edgeofcollapse from "../assets/edgeofcollapse.png"
import jednajaskolka from "../assets/jednajaskolka.png"

function Games() {
  return (
    <Container>
      <h2>Game Projects</h2>
      <Projects>

        <Project>
          <Header>
            <div className="project-links">
            </div>
          </Header>
          <Body>
            <h3>HurrDur</h3>
            <p>
              <a>
                The project developed as an batchelor thesis. The application is designed to support the process of music education. The user has several lessons available, which consist of exercises related to tempo sense, distinguishing tone and sound, recognizing musical intervals. The user can also play a mini-game that involves memorizing the sounds of melodies played and repeating them.
              </a>
            </p>
          </Body>
          <Footer>
            <ul className="tech-list">
              <li>C#</li>
              <li>Unity 3D</li>
              <li>Music</li>
            </ul>
          </Footer>
        </Project>

        <Project>
          <Header>
            <div className="project-links">
            </div>
          </Header>
          <Body>
            <h3>Jedna jaskółka wiosny nie czyni</h3>
            <p>
              <a>
                A project developed during the game jam Boat in the Jam.
              </a>
              <img src={jednajaskolka} alt="Piotr Bednarek" />
            </p>
          </Body>
          <Footer>
            <ul className="tech-list">
              <li>C#</li>
              <li>Unity 3D</li>
            </ul>
          </Footer>
        </Project>

        <Project>
          <Header>
            <div className="project-links">
            </div>
          </Header>
          <Body>
            <h3>Edge of Collapse</h3>
            <p>
              <a>
                A project developed for the external publisher.
              </a>
              <img src={edgeofcollapse} alt="Piotr Bednarek" />
            </p>
          </Body>
          <Footer>
            <ul className="tech-list">
              <li>C#</li>
              <li>Unity 3D</li>
            </ul>
          </Footer>
        </Project>

        <Project>
          <Header>
            <div className="project-links">
            </div>
          </Header>
          <Body>
            <h3>Split</h3>
            <p>
              <a>A project developed for the external publisher. The main task is to solve logic puzzles using the ability to reverse time.</a>
              <img src={split} alt="Piotr Bednarek" />
            </p>
          </Body>
          <Footer>
            <ul className="tech-list">
              <li>C#</li>
              <li>Unity 3D</li>
            </ul>
          </Footer>
        </Project>

        <Project>
          <Header>
            <div className="project-links">
            </div>
          </Header>
          <Body>
            <h3>Can't stop rolling</h3>
            <p>
              My first game developed for Android devices. We control a bottle rolling on the pavement along the streets of the city while avoiding various obstacles. Our goal is to collect golden caps which are the game's currency, for which we can buy new skins. In the game we have the opportunity to collect a power-ups giving special effects.
            </p>
          </Body>
          <Footer>
            <ul className="tech-list">
              <li>C#</li>
              <li>Unity 3D</li>
            </ul>
          </Footer>
        </Project>
      </Projects>
    </Container>
  )
}

export default Games;
