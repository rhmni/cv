import useLang from "./useLang";
import DbData from '../../Data/db.json';

export default () => {
    const [lang, langContext] = useLang();

    let dbData;

    if (lang === 'fa') dbData = DbData.fa;
    else dbData = DbData.en;

    return dbData;
}