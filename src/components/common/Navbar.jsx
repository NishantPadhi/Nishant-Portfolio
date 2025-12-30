import React, {use, useState} from 'react';
import {NavLink} from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import {useTranslation} from 'react-i18next';
import useTypingEffect from '../../hooks/useTypingEffect';
import imagepath from '/images/logo.png';
import {useTheme} from '../../context/ThemeContext';

export default function Navbar() {
  const linkClass = ({isActive}) =>
    isActive ? 'font-semibold underline' : 'hover:underline';
  const {i18n, t} = useTranslation();
  const name = useTypingEffect(t('name'), 100);
  const {theme} = useTheme();

  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="flex">
      <div className="flex justify-between items-center py-6 flex-1">
        <h1 className="text-4xl font-bold text-gradient flex items-center">
          <img src={imagepath} alt="Nishant Padhi - logo" className="mr-4" />
          {name}
        </h1>
        <nav className="space-x-6 flex-1">
          <ul className="hidden md:flex w-100% justify-end items-center gap-6">
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
          </ul>
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>
        </nav>
      </div>
      {/* ================= MOBILE MENU ================= */}
      {/* Visible ONLY below md */}
      <div
        className={`
          fixed inset-0 bg-white z-50 transform transition-transform duration-300
          md:hidden
          ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}
          ${theme === 'dark' ? 'backColor-dark' : 'backColor-light'}
        `}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button onClick={() => setMobileOpen(false)} className="text-2xl">
            ✕
          </button>
        </div>

        {/* Mobile Menu Items */}
        <ul className="flex flex-col items-center gap-6 text-lg mt-10">
          <div
            className="flex flex-col items-center gap-6 text-lg"
            onClick={() => setMobileOpen(false)}
          >
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
          </div>
          <select
            onChange={(e) => i18n.changeLanguage(e.target.value)}
            className="bg-transparent"
          >
            <option value="en">EN</option>
            <option value="hi">HI</option>
            <option value="or">OR</option>
          </select>
        </ul>
      </div>

      {/* Spacer so content doesn’t go under fixed navbar */}
      <div className="h-16"></div>
    </header>
  );
}
