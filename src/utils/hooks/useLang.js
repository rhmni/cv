import {useContext} from "react";
import {LangContext} from "../../Context/langContext";

const useLang = () => {

    const context = useContext(LangContext);

    if (context === undefined) {
        throw new Error('useLang in not within LangContextProvider');
    }
    return [context.lang.lang, context];
}

export default useLang;