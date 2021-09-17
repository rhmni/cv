import './App.css';
import ThemeContextProvider from "./Context/themeContext";
import Home from "./Pages/Home";



const App = () => {


    return (
        <ThemeContextProvider>
            <Home/>
        </ThemeContextProvider>
    );
}

export default App;
