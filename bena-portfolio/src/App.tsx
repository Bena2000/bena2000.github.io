import Games from "./Games/Games"
import Programs from "./Programs/Programs"
import { GlobalStyle } from "./styles/global"
import Welcome from "./Welcome/Welcome"

export const App: React.FC = () => {
    return (
        <>
            <GlobalStyle></GlobalStyle>
            <Welcome></Welcome>
            <Programs></Programs>
            <Games></Games>
        </>
    )
}

export default App
