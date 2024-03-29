import React from "react";
import ReactLogo from "../assets/images/react-logo.png";
import { PopOver } from "../components/PopOver";
import { ContentView } from "./Home.styled";

export const Home = () => {
    return (
        <ContentView>
            <PopOver>
                <img src={ReactLogo} width={128} />
            </PopOver>
            <p className="centered">
                This is a lightweight React app based on a simple and faster structure.</p>
            <p className="centered">
                Start a new project coping contents from repository with command:</p>
            <pre className="centered">
                $ git clone https://github.com/morissonmaciel/basic-react-app.git [project_name]</pre>
        </ContentView>
    );
};