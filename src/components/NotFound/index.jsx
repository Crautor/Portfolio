'use client';

import Link from 'next/link';
import { Fragment, useEffect, useState } from 'react';

import HtmlLang from '@/components/HtmlLang';
import { dictionaries } from '@/i18n/dictionaries';

const LANGUAGES = [
  { code: 'pt', label: 'PT', lang: 'pt-BR', home: '/' },
  { code: 'en', label: 'EN', lang: 'en', home: '/en' },
];

// The address the visitor opened, with escapes such as %20 turned back into text.
function openedPath() {
  const { pathname } = window.location;
  try {
    return decodeURIComponent(pathname);
  } catch {
    return pathname;
  }
}

// Long addresses wrap after a slash instead of in the middle of a word.
function PathText({ path }) {
  return path.split('/').map((segment, index) => (
    <Fragment key={index}>
      {index > 0 ? '/' : null}
      {index > 1 ? <wbr /> : null}
      {segment}
    </Fragment>
  ));
}

export default function NotFound() {
  // A single static 404.html answers every missing address, so the address
  // is only known in the browser. Addresses under /en get the English copy.
  const [locale, setLocale] = useState('pt');
  const [path, setPath] = useState(null);

  useEffect(() => {
    const opened = openedPath();
    setPath(opened);
    if (/^\/en(\/|$)/.test(opened)) setLocale('en');
  }, []);

  const t = dictionaries[locale];
  const { lang, home } = LANGUAGES.find(({ code }) => code === locale);

  return (
    <div className='flex min-h-[100svh] flex-col'>
      <HtmlLang lang={lang} />

      <header className='container-page flex h-16 shrink-0 items-center justify-between gap-6'>
        <Link href={home} aria-label={t.nav.home} className='font-display text-2xl font-extrabold tracking-tight'>
          vd<span className='text-accent'>.</span>
        </Link>

        <div
          role='group'
          aria-label={t.nav.language}
          className='flex items-center rounded-full border border-line p-0.5 text-xs font-semibold'
        >
          {LANGUAGES.map((language) => {
            const active = language.code === locale;
            return (
              <button
                key={language.code}
                type='button'
                lang={language.lang}
                aria-pressed={active}
                onClick={() => setLocale(language.code)}
                className={`rounded-full px-2.5 py-1 transition-colors ${
                  active ? 'bg-line' : 'text-moss hover:text-mist'
                }`}
              >
                {language.label}
              </button>
            );
          })}
        </div>
      </header>

      <main className='container-page flex flex-1 flex-col justify-center pb-24 pt-8'>
        <h1>
          <span className='notfound-code rise block' style={{ '--delay': '60ms' }}>
            404<span className='text-accent'>.</span>
          </span>
          <span className='contact-lead rise mt-6 block' style={{ '--delay': '160ms' }}>
            {t.notFound.title}
          </span>
        </h1>

        <p className='rise mt-5 max-w-[36rem] text-lg leading-relaxed text-moss' style={{ '--delay': '240ms' }}>
          {path ? (
            <>
              {t.notFound.pathLead}{' '}
              <span className='break-words font-medium text-mist'>
                <PathText path={path} />
              </span>
              .
            </>
          ) : (
            t.notFound.noPath
          )}{' '}
          {t.notFound.hint}
        </p>

        <div className='rise mt-10 flex flex-wrap gap-3' style={{ '--delay': '320ms' }}>
          <Link href={home} className='btn btn-primary'>
            {t.notFound.home}
          </Link>
          <Link href={`${home}#work`} className='btn btn-ghost'>
            {t.hero.ctaWork}
          </Link>
        </div>
      </main>
    </div>
  );
}
