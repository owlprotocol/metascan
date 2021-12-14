import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LayoutWrapper from './layout';
import { BlocksPage } from './screens';
import { ThemeProvider } from 'styled-components';
import { THEME_COLORS } from './constants';

//import ReactGA from 'react-ga';

function App() {
    //ReactGA.initialize('UA-000000-01');
    //ReactGA.pageview(window.location.pathname + window.location.search);

    return (
        <div className="App">
            <ThemeProvider theme={THEME_COLORS['light']}>
                <BrowserRouter>
                    <Switch>
                        <LayoutWrapper>
                            <Route path="/home">
                                <p>Home</p>
                            </Route>
                            <Route path="/blocks">
                                <BlocksPage />
                            </Route>
                            {/* <Route path="/block/:blockNumber">
                                <BlockPage />
                            </Route> */}
                        </LayoutWrapper>
                    </Switch>
                </BrowserRouter>
            </ThemeProvider>
        </div>
    );
}

export default App;
