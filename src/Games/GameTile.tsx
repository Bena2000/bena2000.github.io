import { Slideshow } from "../Slideshow/Slideshow";
import { Content, Footer, Project, TechList, Title } from "./styles";

interface Props {
    title: string,
    description: string,
    images: string[],
    technologies: string[],
    horizontal: boolean
}

export const GameTile: React.FC<Props> = ({ title, description, images, technologies, horizontal }) => {
    return (
        <Project>
            <div>
                <Title>{title}</Title>
                <Content>
                    <div style={horizontal ? { width: "40%" } : { width: "70%" }}>
                        <a> {description} </a>
                    </div>
                    <div style={horizontal ? { width: "60%" } : { width: "30%" }}>
                        {images.length > 0 ? <Slideshow imagesPaths={images} /> : ""}
                    </div>
                </Content>
            </div>
            <Footer>
                <TechList>
                    {technologies.map(function (item) {
                        return <li key={item}>{item}</li>
                    })}
                </TechList>
            </Footer>
        </Project>
    )
}