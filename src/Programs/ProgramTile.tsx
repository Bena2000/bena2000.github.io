import { Body, Footer, Header, Project } from "./styles";

interface Props {
    title: string,
    description: string,
    image: string,
    technologies: string[]
}

export const ProgramTile: React.FC<Props> = ({ title, description, image, technologies }) => {
    return (
        <Project>
            <Header>
                <div className="project-links">
                </div>
            </Header>
            <Body>
                <h3>{title}</h3>
                <p>
                    <a>
                        {description}
                    </a>
                    <img style={{ maxWidth: "60%" }} src={image} />
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