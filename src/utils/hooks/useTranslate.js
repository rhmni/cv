import TranslateData from "../../Data/translate.json";
import useLang from "./useLang";

export default () => {
    const [lang, langContext] = useLang();

    let translateData;

    if (lang === 'fa') translateData = TranslateData.fa;
    else translateData = TranslateData.en;

    return translateData;
}