import Seo from '../components/common/Seo';
import {useTranslation} from 'react-i18next';
import {Chrono} from 'react-chrono';
import {useTheme} from '../context/ThemeContext';
import HeadLine from '../components/common/Headline';

export default function Education() {
  const {t} = useTranslation();
  const {theme} = useTheme();

  const educationList = [
  {
    title: t("btechTitle"),
    cardTitle: t('btechCardTitle'),
    cardSubtitle: t('btechCardSubtitle'),
    cardDetailedText: t('btechCardDetailedText'),
  },
  {
    title: t('hscTitle'),
    cardTitle: t('hscCardTitle'),
    cardSubtitle: t('hscCardSubtitle'),
    cardDetailedText: t('hscCardDetailedText'),
  },
  {
    title: t('sscTitle'),
    cardTitle: t('sscCardTitle'),
    cardSubtitle: t('sscCardSubtitle'),
    cardDetailedText: t('sscCardDetailedText'),
  },
];

  return (
    <section className="mt-20">
      <Seo title="Education | Nishant Padhi | Senior Frontend Engineer" />
      <HeadLine title={t('educationHeadline')} />
      <div className="mt-4 text-18">
        <Chrono
          items={educationList}
          mode="VERTICAL_ALTERNATING"
          itemWidth={150}
          disableToolbar={true}
          darkMode={theme !== 'dark'}
          enableDarkToggle={true}
          key={theme}
        />
      </div>
    </section>
  );
}
