import Search from "./search";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Ok from "./ok";
import Songs from "./songs";
import Compiler from "./compiler";
import Render from "./render";

export default function App() {
    return (
        <BrowserRouter>
            <div>
                <header>
                    <Link to="/">
                        <img src="/gummy-cassette.svg"></img>
                    </Link>
                    <h1 className="logo">sharealy.</h1>
                </header>
                <Route exact path="/" render={() => <Search />} />
                <Route path="/ok" render={() => <Ok />} />
                <Route path="/songs" render={() => <Songs />} />
                <Route path="/compiler" render={() => <Compiler />} />
                <Route path="/shared/:id" render={() => <Render />} />
            </div>
        </BrowserRouter>
    );
}
