import Seo from '../components/common/Seo';
import {useTranslation} from 'react-i18next';
import {Typewriter} from 'react-simple-typewriter';
import {useTheme} from '../context/ThemeContext';

export default function Home() {
  const {t} = useTranslation();
  const {theme} = useTheme();

  const titleArray = [
    t('frontendDeveloper'),
    t('softwareEngineer'),
    t('computerAddict'),
    t('techEnthusiast'),
  ];

  return (
    <section className="mt-20 home">
      <Seo title="Home | Nishant Padhi | Senior Frontend Engineer" />
      <div>
        <h4 className={`${theme === 'dark' ? '' : 'dark'}`}>
          {t('homeTitle')}
        </h4>
        <h1 className={`${theme === 'dark' ? '' : 'dark'}`}>{t('name')}</h1>
        <span className={`${theme === 'dark' ? '' : 'dark'}`}>
          <Typewriter
            words={titleArray}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={40}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
        <p className={`mt-4 ${theme === 'dark' ? '' : 'dark'}`}>{t('subTitle')}</p>
        <p className={`${theme === 'dark' ? '' : 'dark'}`}>{t('subTitle2')}</p>
        <p className={`${theme === 'dark' ? '' : 'dark'}`}>{t('subTitle3')}</p>
      </div>
    </section>
  );
}
