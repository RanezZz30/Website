import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import CrashGame from './pages/CrashGame';
import MinesGame from './pages/MinesGame';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
                <Route path="/crash" component={CrashGame} />
                <Route path="/mines" component={MinesGame} />
            </Switch>
        </Router>
    );
}

export default App;
