import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Wait from './components/Wait/Wait';

function App() {
    return (
        <Router>
            <div>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <div className="container mt-3 shadow second">
                            <div className="main">
                                <Wait />
                            </div>
                        </div>
                    </Route>

                    <Route path="/:nickname">
                        <Main />
                    </Route>
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
