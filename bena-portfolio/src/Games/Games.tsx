import { Container, Projects } from "./styles";
import split from "../assets/split.png"
import jednajaskolka from "../assets/jednajaskolka.png"

import edgeofcollapse1 from "../assets/edgeofcollapse1.png"
import edgeofcollapse2 from "../assets/edgeofcollapse2.jpg"
import edgeofcollapse3 from "../assets/edgeofcollapse3.jpg"

import cantstoprolling1 from "../assets/cantstoprolling1.png"
import cantstoprolling2 from "../assets/cantstoprolling2.png"
import cantstoprolling3 from "../assets/cantstoprolling3.png"

import hurrdur1 from "../assets/hurrdur1.png"
import hurrdur2 from "../assets/hurrdur2.png"
import hurrdur3 from "../assets/hurrdur3.png"
import hurrdur4 from "../assets/hurrdur4.png"
import hurrdur5 from "../assets/hurrdur5.png"

import { GameTile } from "./GameTile";

export const Games: React.FC = () => {
  return (
    <Container>
      <h2>Game ✦ Projects</h2>
      <Projects>
        <GameTile
          title="HurrDur"
          description="The project developed as an batchelor thesis. The application is designed to support the process of music education. The user has several lessons available, which consist of exercises related to tempo sense, distinguishing tone and sound, recognizing musical intervals. The user can also play a mini-game that involves memorizing the sounds of melodies played and repeating them."
          images={[hurrdur1, hurrdur2, hurrdur3, hurrdur4, hurrdur5]}
          technologies={["C#", "Unity 3D", "Music"]} />
        <GameTile
          title="Jedna jaskółka wiosny nie czyni"
          description="A project developed during the game jam Boat in the Jam."
          images={[jednajaskolka]}
          technologies={["C#", "Unity 3D"]} />
        <GameTile
          title="Edge of Collapse"
          description="A project developed for the external publisher."
          images={[edgeofcollapse1, edgeofcollapse2, edgeofcollapse3]}
          technologies={["C#", "Unity 3D"]} />
        <GameTile
          title="Split"
          description="A project developed for the external publisher. The main task is to solve logic puzzles using the ability to reverse time."
          images={[split]}
          technologies={["C#", "Unity 3D"]} />
        <GameTile
          title="Can't stop rolling"
          description="My first game developed for Android devices. We control a bottle rolling on the pavement along the streets of the city while avoiding various obstacles. Our goal is to collect golden caps which are the game's currency, for which we can buy new skins. In the game we have the opportunity to collect a power-ups giving special effects."
          images={[cantstoprolling1, cantstoprolling2, cantstoprolling3]}
          technologies={["C#", "Unity 3D"]} />
      </Projects>
    </Container>
  )
}

export default Games;
