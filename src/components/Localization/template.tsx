import React, { useMemo } from 'react';
import { LanguageLink, LanguageFooter } from './styles';
import { useTranslation } from 'react-i18next';

interface Languages {
  [key: string]: string;
}

const languages: Languages = {
  en: "English",
  de: "Deutsch",
  fr: "Français",
};

export const Localization: React.FC = () => {
  const { i18n } = useTranslation();

  return useMemo(() => (
    <LanguageFooter>
      {
        Object.keys(languages).map((id) => (
          // TODO: clicking goes back to home page
          <LanguageLink key={id} to="#" onClick={() => { i18n.changeLanguage(id); }} >
            {languages[id]}
          </LanguageLink>
        ))
      }
    </LanguageFooter>
  ), []);
};
