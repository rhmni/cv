import './App.css';
import ThemeContextProvider from "./Context/themeContext";
import Home from "./Pages/Home";
import About from "./Pages/About";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


const App = () => {


    return (
        <ThemeContextProvider>
            <Router>
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/about/' exact component={About}/>
                </Switch>
            </Router>
        </ThemeContextProvider>
    );
}

export default App;
