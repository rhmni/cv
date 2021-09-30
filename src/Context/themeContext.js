import {createContext, useReducer} from "react";

export const ThemeContext = createContext();

const themeReducer = (state, action) => {
    switch (action.type) {
        case 'setLight':
            localStorage.setItem('theme', 'light');
            return {theme: 'light'}
        case 'setDark':
            localStorage.setItem('theme', 'dark');
            return {theme: 'dark'}
        default:
            throw new Error();
    }
}


const ThemeProvider = props => {

    let initialState = {theme: 'light'};

    if (localStorage.getItem('theme') === 'dark') initialState = {theme: 'dark'};

    const [theme, dispatch] = useReducer(themeReducer, initialState);

    return (
        <ThemeContext.Provider value={{theme, dispatch}}>
            {props.children}
        </ThemeContext.Provider>
    )
};
export default ThemeProvider;