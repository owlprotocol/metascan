import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { BlocksPage } from './screens';

//import ReactGA from 'react-ga';

function App() {
    //ReactGA.initialize('UA-000000-01');
    //ReactGA.pageview(window.location.pathname + window.location.search);

    return (
        <div className="App">
            <header className="App-header">
                <BrowserRouter>
                    <Switch>
                        <Route path="/home">
                            <p>Home</p>
                        </Route>
                        <Route path="/blocks">
                            <BlocksPage />
                        </Route>
                        {/* <Route path="/block/:blockNumber">
                            <BlockPage />
                        </Route> */}
                    </Switch>
                </BrowserRouter>
            </header>
        </div>
    );
}

export default App;
