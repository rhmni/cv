import useLang from "./useLang";
import DbData from '../../Data/db.json';

const useDb = () => {
    const [lang, langContext] = useLang();

    let dbData;

    if (lang === 'fa') dbData = DbData.fa;
    else dbData = DbData.en;

    return dbData;
}

export default useDb;