import {createContext, useReducer} from "react";

export const LangContext = createContext();

const langReducer = (state, action) => {
    switch (action.type) {
        case 'setFa':
            localStorage.setItem('lang', 'fa');
            return {lang: 'fa'};
        case 'setEn':
            localStorage.setItem('lang', 'en');
            return {lang: 'en'};
        default:
            throw new Error();
    }
}

const LangProvider = props => {

    let initialState = {lang: 'fa'};

    if (localStorage.getItem('lang') === 'en') initialState = {theme: 'en'};

    const [lang, dispatch] = useReducer(langReducer, initialState);

    return (
        <LangContext.Provider value={{lang, dispatch}}>
            {props.children}
        </LangContext.Provider>
    )
};
export default LangProvider;