import logo from "./logo.svg";
import "./App.css";
import { PrimerComponete } from "./Componets/PrimerComponete";

function App() {
    return ( <
        div className = "App" >
        <
        header className = "App-header" >
        <
        img src = { logo }
        className = "App-logo"
        alt = "logo" / >
        <
        p > Repaso de React 2022 < /p>

        <
        PrimerComponete / >
        <
        /header> <
        /div>
    );
}

export default App;