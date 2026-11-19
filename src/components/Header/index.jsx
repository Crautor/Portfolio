'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const SECTIONS = ['work', 'experience', 'about', 'contact'];

const LANGUAGES = [
  { code: 'pt', label: 'PT', name: 'Português', href: '/', hrefLang: 'pt-BR' },
  { code: 'en', label: 'EN', name: 'English', href: '/en', hrefLang: 'en' },
];

function LanguageSwitch({ locale, label }) {
  return (
    <div
      role='group'
      aria-label={label}
      className='flex items-center rounded-full border border-line p-0.5 text-xs font-semibold'
    >
      {LANGUAGES.map((language) =>
        language.code === locale ? (
          <span key={language.code} aria-current='true' className='rounded-full bg-line px-2.5 py-1'>
            {language.label}
          </span>
        ) : (
          <Link
            key={language.code}
            href={language.href}
            hrefLang={language.hrefLang}
            lang={language.hrefLang}
            scroll={false}
            aria-label={language.name}
            className='rounded-full px-2.5 py-1 text-moss transition-colors hover:text-mist'
          >
            {language.label}
          </Link>
        ),
      )}
    </div>
  );
}

export default function Header({ locale, t }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const solid = scrolled || menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        solid ? 'border-line/80 bg-ink/85 backdrop-blur-md' : 'border-transparent'
      }`}
    >
      <div className='container-page flex h-16 items-center justify-between gap-6'>
        <a
          href='#top'
          aria-label={t.home}
          onClick={closeMenu}
          className='font-display text-2xl font-extrabold tracking-tight'
        >
          vd<span className='text-accent'>.</span>
        </a>

        <nav aria-label={t.sections} className='hidden md:block'>
          <ul className='flex items-center gap-8 text-sm'>
            {SECTIONS.map((id) => (
              <li key={id}>
                <a href={`#${id}`} className='nav-link'>
                  {t[id]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className='flex items-center gap-2'>
          <LanguageSwitch locale={locale} label={t.language} />
          <button
            type='button'
            aria-expanded={menuOpen}
            aria-controls='mobile-menu'
            onClick={() => setMenuOpen((open) => !open)}
            className='grid h-9 w-9 place-items-center rounded-full border border-line md:hidden'
          >
            {menuOpen ? <FiX aria-hidden='true' /> : <FiMenu aria-hidden='true' />}
            <span className='sr-only'>{menuOpen ? t.closeMenu : t.openMenu}</span>
          </button>
        </div>
      </div>

      <nav id='mobile-menu' aria-label={t.sections} hidden={!menuOpen} className='border-t border-line/80 md:hidden'>
        <ul className='container-page flex flex-col py-3'>
          {SECTIONS.map((id) => (
            <li key={id}>
              <a href={`#${id}`} onClick={closeMenu} className='block py-3 font-display text-2xl font-bold'>
                {t[id]}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
