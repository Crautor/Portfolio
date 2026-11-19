import Duration from '@/components/Duration';
import SectionHeading from '@/components/SectionHeading';
import { experience } from '@/content/experience';
import { formatMonth, pick } from '@/i18n/format';

function period(start, end, locale, present) {
  return `${formatMonth(start, locale)} – ${end ? formatMonth(end, locale) : present}`;
}

export default function Experience({ locale, t }) {
  return (
    <section id='experience' aria-labelledby='experience-title' className='section'>
      <div className='container-page'>
        <SectionHeading id='experience-title'>{t.title}</SectionHeading>

        <ol>
          {experience.map((job, index) => {
            const current = !job.end;
            const last = index === experience.length - 1;
            const dates = (
              <>
                <p className='text-sm font-medium'>{period(job.start, job.end, locale, t.present)}</p>
                <p className='mt-1 text-sm text-moss'>
                  <Duration start={job.start} end={job.end} locale={locale} />
                </p>
              </>
            );

            return (
              <li key={job.company} className='md:grid md:grid-cols-12 md:gap-8'>
                <div className='hidden pt-1.5 md:col-span-3 md:block'>{dates}</div>

                <div
                  className={`relative border-l border-line pl-7 md:col-span-9 md:pl-10 ${
                    last ? 'pb-2' : 'pb-16 md:pb-24'
                  }`}
                >
                  <span
                    aria-hidden='true'
                    className={`absolute -left-[5px] top-3 h-[9px] w-[9px] rounded-full ${
                      current ? 'bg-accent shadow-[0_0_0_5px_rgb(52_211_153_/_0.15)]' : 'bg-moss/50'
                    }`}
                  />
                  <div className='mb-4 md:hidden'>{dates}</div>

                  <h3 className='font-display text-3xl font-bold tracking-tight md:text-4xl'>{job.company}</h3>
                  <p className='mt-1 text-sm text-moss'>{pick(job.location, locale)}</p>

                  <ul className='mt-6 space-y-2.5 border-y border-line/70 py-4'>
                    {job.roles.map((role) => (
                      <li
                        key={`${role.title}-${role.start}`}
                        className='flex flex-wrap items-baseline justify-between gap-x-6 gap-y-0.5'
                      >
                        <span className='font-medium'>
                          {role.title}
                          {role.type ? (
                            <span className='ml-2 text-sm font-normal text-moss'>{pick(role.type, locale)}</span>
                          ) : null}
                        </span>
                        {job.roles.length > 1 ? (
                          <span className='text-sm text-moss'>{period(role.start, role.end, locale, t.present)}</span>
                        ) : null}
                      </li>
                    ))}
                  </ul>

                  <ul className='bullet-list mt-6 max-w-2xl space-y-3 leading-relaxed text-mist/85'>
                    {pick(job.highlights, locale).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  <p className='mt-6 max-w-2xl text-sm leading-relaxed text-moss'>{job.stack.join(', ')}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
