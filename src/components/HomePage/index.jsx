import About from '@/components/About';
import Contact, { SiteFooter } from '@/components/Contact';
import Experience from '@/components/Experience';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import HtmlLang from '@/components/HtmlLang';
import Work from '@/components/Work';
import { dictionaries } from '@/i18n/dictionaries';

export default function HomePage({ locale }) {
  const t = dictionaries[locale];

  return (
    <>
      <HtmlLang lang={locale === 'pt' ? 'pt-BR' : 'en'} />
      <a href='#content' className='skip-link'>
        {t.nav.skip}
      </a>
      <Header locale={locale} t={t.nav} />
      <main id='content' tabIndex={-1} className='focus:outline-none'>
        <Hero t={t.hero} />
        <Work locale={locale} t={t.work} />
        <Experience locale={locale} t={t.experience} />
        <About locale={locale} t={t.about} />
        <Contact t={t.contact} />
      </main>
      <SiteFooter t={t.contact} />
    </>
  );
}
