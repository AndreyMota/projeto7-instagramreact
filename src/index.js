import NavBar from "./NavBar.js";
import Body from "./Body.js";
const reactDom = require("react-dom");


function App() {
    return (
        <div>
            <NavBar />
            <Body />
        </div>
    );
}


reactDom.render(<App />, document.querySelector('.root'));