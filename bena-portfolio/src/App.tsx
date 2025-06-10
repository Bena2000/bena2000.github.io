import AboutMe from "./AboutMe/AboutMe"
import Games from "./Games/Games"
import Programs from "./Programs/Programs"
import { GlobalStyle } from "./styles/global"
import Welcome from "./Welcome/Welcome"


function App() {
    return (
        <>
            <GlobalStyle></GlobalStyle>
            <Welcome></Welcome>
            <AboutMe></AboutMe>
            <Games></Games>
            <Programs></Programs>
        </>
    )
}

export default App
