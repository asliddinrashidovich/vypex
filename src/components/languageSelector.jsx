import { Select } from "antd";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const { Option } = Select;

function LanguageSelector() {
  const { i18n } = useTranslation();
  const lang = localStorage.getItem("lang") || "en";

  const handleChangeLang = (val) => {
    i18n.changeLanguage(val);
    localStorage.setItem("lang", val);
  };

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [i18n, lang]);

  return (
    <Select
      value={lang}
      onChange={handleChangeLang}
    >
      <Option value="en">English</Option>
      <Option value="sp">Spanish</Option>
      <Option value="du">Deutsch</Option>
      <Option value="ar">Arabic</Option>
    </Select>
  );
}

export default LanguageSelector;
