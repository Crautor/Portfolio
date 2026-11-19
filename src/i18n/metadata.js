import { createHash } from 'node:crypto';

import { profile } from '@/content/profile';
import { featuredProjects } from '@/content/projects';

import { dictionaries } from './dictionaries';

// Absolute URLs (canonical, hreflang, og:url, og:image) are only emitted when
// the site URL is known. Without it Next.js would fall back to
// http://localhost:3000. Set NEXT_PUBLIC_SITE_URL, or let Vercel provide its
// production domain.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : null);

const PATHS = { pt: '/', en: '/en' };
const LANGUAGE_TAGS = { pt: 'pt-BR', en: 'en' };

// src/app/og.jpg draws the name, the headline and the featured projects. Its
// address changes with them, so sites that cache link previews fetch the new
// image instead of showing the old one.
const ogImageVersion = createHash('sha256')
  .update(JSON.stringify([profile.name, profile.headline, featuredProjects.map(({ id }) => id)]))
  .digest('hex')
  .slice(0, 8);

// 'Tech Lead e DevOps Engineer' / 'Tech Lead and DevOps Engineer'
function headlineText(locale) {
  return new Intl.ListFormat(LANGUAGE_TAGS[locale], { type: 'conjunction' }).format(profile.headline);
}

export function pageMetadata(locale) {
  const { meta } = dictionaries[locale];
  const path = PATHS[locale];
  const headline = headlineText(locale);
  const title = `${profile.name} | ${headline}`;

  return {
    title,
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
      siteName: profile.name,
      title,
      description: meta.description,
      locale: locale === 'pt' ? 'pt_BR' : 'en_US',
      images: [
        {
          url: `/og.jpg?v=${ogImageVersion}`,
          width: 1200,
          height: 630,
          alt: `${profile.name}, ${headline}, ${meta.ogImageAlt}`,
        },
      ],
      ...(siteUrl && { url: path }),
    },
    // X shows og:image as a large card only with this card type.
    twitter: { card: 'summary_large_image' },
  };
}
