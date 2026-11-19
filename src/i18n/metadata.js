import { dictionaries } from './dictionaries';

// Absolute URLs (canonical, hreflang, og:url) are only emitted when the site
// URL is known. Without it Next.js would fall back to http://localhost:3000.
// Set NEXT_PUBLIC_SITE_URL, or let Vercel provide its production domain.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : null);

const PATHS = { pt: '/', en: '/en' };

export function pageMetadata(locale) {
  const { meta } = dictionaries[locale];
  const path = PATHS[locale];

  return {
    title: meta.title,
    description: meta.description,
    ...(siteUrl && {
      metadataBase: new URL(siteUrl),
      alternates: {
        canonical: path,
        languages: { 'pt-BR': PATHS.pt, en: PATHS.en, 'x-default': PATHS.pt },
      },
    }),
    openGraph: {
      type: 'website',
      siteName: 'Vitor Dallanol',
      title: meta.title,
      description: meta.description,
      locale: locale === 'pt' ? 'pt_BR' : 'en_US',
      ...(siteUrl && { url: path }),
    },
  };
}
