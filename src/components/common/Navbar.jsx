import {NavLink} from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import {useTranslation} from 'react-i18next';
import useTypingEffect from '../../hooks/useTypingEffect';
import imagepath from '/images/logo.png';

export default function Navbar() {
  const linkClass = ({isActive}) =>
    isActive ? 'font-semibold underline' : 'hover:underline';
  const {i18n, t} = useTranslation();
  const name = useTypingEffect(t('name'), 100);

  return (
    <nav className="flex justify-between items-center py-6">
      <h1 className="text-4xl font-bold text-gradient pb-4 flex items-center">
        <img src={imagepath} alt="Nishant Padhi - logo" className="mr-4"/>
        {name}
      </h1>
      <div className="flex gap-6 items-center">
        <NavLink to="/" className={linkClass}>
          {t('home')}
        </NavLink>
        <NavLink to="/about" className={linkClass}>
          {t('about')}
        </NavLink>
        <NavLink to="/education" className={linkClass}>
          {t('education')}
        </NavLink>
        <NavLink to="/experience" className={linkClass}>
          {t('experience')}
        </NavLink>
        <NavLink to="/projects" className={linkClass}>
          {t('projects')}
        </NavLink>
        <NavLink to="/contact" className={linkClass}>
          {t('contact')}
        </NavLink>
        <ThemeToggle />
        <select
          onChange={(e) => i18n.changeLanguage(e.target.value)}
          className="bg-transparent"
        >
          <option value="en">EN</option>
          <option value="hi">HI</option>
          <option value="or">OR</option>
        </select>
      </div>
    </nav>
  );
}
