import {createContext, useReducer} from "react";

export const LangContext = createContext();

const langReducer = (state, action) => {
    switch (action.type) {
        case 'setFa':
            return {lang: 'fa'};
        case 'setEn':
            return {lang: 'en'};
        default:
            throw new Error();
    }
}

const LangContextProvider = props => {

    let initialState = {lang: 'fa'};

    const [lang, dispatch] = useReducer(langReducer, initialState);

    return (
        <LangContext.Provider value={{lang, dispatch}}>
            {props.children}
        </LangContext.Provider>
    )
};
export default LangContextProvider;