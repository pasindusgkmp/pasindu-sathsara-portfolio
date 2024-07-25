import React from "react";
import { Navbar, StarsCanvas, Hero, YouTube, Contact, Skills, Projects} from "./components"


function App() {
    return (
        <>
            <div>
                <StarsCanvas />
            </div>
            <div>
                <Navbar />
                <Hero />
                <YouTube />
                <Skills />
                <Projects />
                <Contact />
            </div>
        </>
    );
}

export default App;
