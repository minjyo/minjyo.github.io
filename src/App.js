import { BrowserRouter, Route } from "react-router-dom";
import Home from "../src/pages/home/index";

function App() {
    return (
        <BrowserRouter>
            <Route path="/minjyo.github.io" component={Home}></Route>
//             <Route exact path="/" component={Home}></Route>
        </BrowserRouter>
    );
}

export default App;
