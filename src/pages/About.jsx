import Seo from '../components/common/Seo';
import {useTranslation} from 'react-i18next';
import Square from '../components/common/Square';
import HeadLine from '../components/common/Headline';

export default function About() {
  const {t} = useTranslation();
  return (
    <section className="mt-20">
      <Seo title="About | Nishant Padhi | Senior Frontend Engineer" />
      <HeadLine title={t('aboutHeadline')} />
      <div className="mt-4 max-w-3/4 text-justify text-18">
        <p>{t('home1')}</p>
        <p className="mt-4">{t('home2')}</p>
        <p className="mt-4">{t('home3')}</p>
        <p className="mt-4">{t('home4')}</p>
        <p className="mt-4">{t('home6')}</p>
        <p className="mt-8 flex gap-4">
          <Square />
          <Square />
          <Square />
        </p>
      </div>
    </section>
  );
}
