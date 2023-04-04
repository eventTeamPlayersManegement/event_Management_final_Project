import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

import { Suspense } from "react";
import data from "../../content/data.json";
import translationDE from "../../content/dataDE.json";
import translationGR from "../../content/dataGR.json";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: { translation: data },
      de: { translation: translationDE },
      gr: { translation: translationGR },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

function LanguageSwitcher() {
  const { t } = useTranslation();
  const onChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };
  return (
    <Suspense fallback={"Loading..."}>
      <div>
        <header className="App-header">
          <select name="language" onChange={onChange}>
            <option value="en">🇺🇸</option>
            <option value="de">🇩🇪 </option>
            <option value="gr">🇬🇷</option>
          </select>
        </header>
      </div>
    </Suspense>
  );
}

export default LanguageSwitcher;
