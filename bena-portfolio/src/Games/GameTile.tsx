import { Slideshow } from "../Slideshow/Slideshow";
import { Body, Footer, Header, Project } from "./styles";

interface Props {
    title: string,
    description: string,
    images: string[],
    technologies: string[]
}

export const GameTile: React.FC<Props> = ({ title, description, images, technologies }) => {
    return (
        <Project>
            <Header>
                <div className="project-links">
                </div>
            </Header>
            <Body>
                <h3>{title}</h3>
                <p>
                    <a> {description} </a>
                    {images.length > 0 ? <Slideshow images={images} /> : ""}
                </p>
            </Body>
            <Footer>
                <ul className="tech-list">
                    {technologies.map(function (item) {
                        return <li key={item}>{item}</li>
                    })}
                </ul>
            </Footer>
        </Project>
    )
}