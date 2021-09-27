import {useContext} from "react";
import {ThemeContext} from "../../Context/themeContext";

const useTheme = () => {

    const context = useContext(ThemeContext);

    if (context === undefined) {
        throw new Error('useTheme in not within ThemeContextProvider');
    }
    return [context.theme.theme, context];
}

export default useTheme;