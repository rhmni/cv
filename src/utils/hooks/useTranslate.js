import TranslateData from "../../Data/translate.json";
import useLang from "./useLang";

const useTranslate = () => {
    const [lang, langContext] = useLang();

    let translateData;

    if (lang === 'fa') translateData = TranslateData.fa;
    else translateData = TranslateData.en;

    return translateData;
}

export default useTranslate;