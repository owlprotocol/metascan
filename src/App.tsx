import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
//import ReactGA from 'react-ga';

import logo from './logo.svg';
import './App.css';

function App() {
    //ReactGA.initialize('UA-000000-01');
    //ReactGA.pageview(window.location.pathname + window.location.search);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <HashRouter>
                    <Switch>
                        <Route path="/home" render={() => <p>Home</p>} />
                        <Route path="/hello" render={() => <p>Hello World!</p>} />
                        <Route path="/">
                            <Redirect to="/home" />
                        </Route>
                    </Switch>
                </HashRouter>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
