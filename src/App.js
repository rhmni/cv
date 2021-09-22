import './App.css';
import ThemeContextProvider from "./Context/themeContext";
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";


const App = () => {


    return (
        <ThemeContextProvider>
            <Router>
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/about/' exact component={About}/>
                    <Route path='/projects/' exact component={Projects}/>
                    <Route path='/contact/' exact component={Contact}/>

                    <Route path='*'>
                        <Redirect to='/'/>
                    </Route>
                </Switch>
            </Router>
        </ThemeContextProvider>
    );
}

export default App;
