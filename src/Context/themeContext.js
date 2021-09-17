import {createContext, useReducer} from "react";

export const ThemeContext = createContext();

const themeReducer = (state, action) => {
    switch (action.type) {
        case 'setLight':
            return {theme: 'light'}
        case 'setDark':
            return {theme: 'dark'}
        default:
            throw new Error();
    }
}


const ThemeContextProvider = props => {

    const [theme, dispatch] = useReducer(themeReducer, {theme: 'light'});

    return (
        <ThemeContext.Provider value={{theme, dispatch}}>
            {props.children}
        </ThemeContext.Provider>
    )
};
export default ThemeContextProvider;