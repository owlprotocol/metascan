import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LayoutWrapper from './layout';
import { LandingPage, BlocksPage, AccountPage, TransactionPage } from './screens';
import { ThemeProvider } from 'styled-components';
import { THEME_COLORS } from './constants';

//import ReactGA from 'react-ga';

function App() {
    //ReactGA.initialize('UA-000000-01');
    //ReactGA.pageview(window.location.pathname + window.location.search);

    return (
        <div className="App">
            <ThemeProvider theme={THEME_COLORS['light']}>
                <Router>
                    <Switch>
                        <LayoutWrapper>
                            {/* @ts-ignore */}
                            <Route exact={true} path="/">
                                <LandingPage />
                            </Route>
                            <Route path="/blocks">
                                <BlocksPage />
                            </Route>
                            <Route path="/account">
                                <AccountPage />
                            </Route>
                            <Route path="/txn/:txnHash">
                                <TransactionPage />
                            </Route>
                            {/* <Route path="/block/:blockNumber">
                                <BlockPage />
                            </Route> */}
                        </LayoutWrapper>
                    </Switch>
                </Router>
            </ThemeProvider>
        </div>
    );
}

export default App;
