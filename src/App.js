import './App.css';
import ThemeContextProvider from "./Context/themeContext";
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import {AppRoutes} from "./Routing/AppRoutes";


const App = () => {


    return (
        <ThemeContextProvider>
            <Router>
                <Switch>

                    <Route path={AppRoutes.HOME} exact component={Home}/>
                    <Route path={AppRoutes.ABOUT} exact component={About}/>
                    <Route path={AppRoutes.PROJECTS} exact component={Projects}/>
                    <Route path={AppRoutes.CONTACT} exact component={Contact}/>

                    <Route path='*'>
                        <Redirect to={AppRoutes.HOME}/>
                    </Route>

                </Switch>
            </Router>
        </ThemeContextProvider>
    );
}

export default App;
