import Image from 'next/image';

import SectionHeading from '@/components/SectionHeading';
import photo from '@/assets/vitor.webp';
import { achievements, education, stackGroups } from '@/content/about';
import { formatMonth, pick } from '@/i18n/format';

export default function About({ locale, t }) {
  return (
    <section id='about' aria-labelledby='about-title' className='section'>
      <div className='container-page'>
        <SectionHeading id='about-title'>{t.title}</SectionHeading>

        <div className='grid gap-16 lg:grid-cols-12 lg:gap-12'>
          <div className='space-y-6 text-lg leading-relaxed text-mist/85 lg:col-span-7'>
            {t.paragraphs.map((paragraph) => (
              <p key={paragraph} className='max-w-[38rem]'>
                {paragraph}
              </p>
            ))}
          </div>

          <aside className='space-y-12 lg:col-span-4 lg:col-start-9'>
            <Image
              src={photo}
              alt={t.photoAlt}
              sizes='112px'
              placeholder='blur'
              draggable={false}
              className='h-28 w-28 select-none rounded-full object-cover ring-1 ring-line'
            />

            <div>
              <h3 className='aside-title'>{t.educationTitle}</h3>
              <ul className='mt-4 space-y-5'>
                {education.map((item) => (
                  <li key={item.start}>
                    <p className='font-medium leading-snug'>{pick(item.course, locale)}</p>
                    <p className='mt-1 text-sm text-moss'>
                      {item.school}, {formatMonth(item.start, locale)} – {formatMonth(item.end, locale)}
                    </p>
                    {item.note ? <p className='text-sm text-moss'>{pick(item.note, locale)}</p> : null}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className='aside-title'>{t.achievementsTitle}</h3>
              <ul className='mt-4 space-y-5'>
                {achievements.map((item) => (
                  <li key={pick(item.title, 'en')}>
                    <p className='font-medium leading-snug'>{pick(item.title, locale)}</p>
                    {item.detail ? <p className='mt-1 text-sm text-moss'>{pick(item.detail, locale)}</p> : null}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        <div className='mt-24 md:mt-32'>
          <h3 className='font-display text-3xl font-bold tracking-tight md:text-4xl'>{t.stackTitle}</h3>
          <dl className='mt-10 grid gap-x-8 gap-y-12 border-t border-line pt-10 sm:grid-cols-2 lg:grid-cols-4'>
            {stackGroups.map((group) => (
              <div key={pick(group.title, 'en')}>
                <dt className='aside-title'>{pick(group.title, locale)}</dt>
                <dd className='mt-4'>
                  <ul className='space-y-2'>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
