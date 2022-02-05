import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Web3 from 'web3';
import { useDispatch } from 'react-redux';

import { MAINNET_RPC } from '@owlprotocol/web3-redux/environment';
import { Network } from '@owlprotocol/web3-redux';

import LayoutWrapper from './layout';
import { LandingPage, AccountPage, TransactionPage, ErrorPage } from './screens';
import { ThemeProvider } from 'styled-components';
import { THEME_COLORS } from './constants';

//import ReactGA from 'react-ga';

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(Network.create({ networkId: '1', web3: new Web3(MAINNET_RPC!) }));
    }, [dispatch]);

    //ReactGA.initialize('UA-000000-01');
    //ReactGA.pageview(window.location.pathname + window.location.search);

    return (
        <div className="App">
            <ThemeProvider theme={THEME_COLORS['light']}>
                <Router>
                    <Switch>
                        <LayoutWrapper>
                            <Route exact={true} path="/">
                                <LandingPage />
                            </Route>
                            <Route
                                path="/address/:address"
                                render={({ match }) => <AccountPage networkId="1" address={match.params.address} />}
                            />
                            <Route
                                path="/tx/:hash"
                                render={({ match }) => <TransactionPage networkId="1" hash={match.params.hash} />}
                            />
                            {/*<Route path="/block/:blockNumber">
                                <BlocksPage />
                            </Route>
                            <Route path="/blocks">
                                <BlocksPage />
                            </Route>*/}
                            <Route path="/error">
                                <ErrorPage />
                            </Route>
                        </LayoutWrapper>
                    </Switch>
                </Router>
            </ThemeProvider>
        </div>
    );
}

export default App;
