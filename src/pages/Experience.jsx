import Seo from '../components/common/Seo';
import {useTranslation} from 'react-i18next';
import {Chrono} from 'react-chrono';
import {useTheme} from '../context/ThemeContext';

export default function Education() {
  const {t} = useTranslation();
  const {theme} = useTheme();

  const experienceList = [
    {
      title: t('exp1Title'),
      cardTitle: t('exp1CardTitle'),
      cardDetailedText: t('exp1CardDetailedText'),
    },
    {
      title: t('exp2Title'),
      cardTitle: t('exp2CardTitle'),
      cardDetailedText: t('exp2CardDetailedText'),
    },
    {
      title: t('exp3Title'),
      cardTitle: t('exp3CardTitle'),
      cardDetailedText: t('exp3CardDetailedText'),
    },
    {
      title: t('exp4Title'),
      cardTitle: t('exp4CardTitle'),
      cardDetailedText: t('exp4CardDetailedText'),
    },
  ];

  return (
    <section className="mt-20">
      <Seo title="Experience | Nishant Padhi | Senior Frontend Engineer" />
      <h2 className="text-4xl font-bold headLine">{t('experienceHeadline')}</h2>
      <div className="mt-4">
        <Chrono
          items={experienceList}
          mode="VERTICAL_ALTERNATING"
          disableToolbar={false}
          darkMode={theme !== 'dark'}
          enableDarkToggle={true}
          key={theme}
          parseDetailsAsHTML={true}
        />
      </div>
    </section>
  );
}
