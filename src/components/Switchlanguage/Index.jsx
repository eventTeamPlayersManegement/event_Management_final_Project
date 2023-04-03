import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

import { Suspense } from "react";
import data from "../../content/data.json";
import translationDE from "../../content/dataDE.json";
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: { translation: data },
      de: { translation: translationDE },
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
          {/* <h1>{t("welcome")}</h1>*/}
          <select name="language" onChange={onChange}>
            <option value="en">EN</option>
            <option value="de">DE</option>
            <option value="de">GR</option>
          </select>
        </header>
      </div>
    </Suspense>
  );
}

export default LanguageSwitcher;
