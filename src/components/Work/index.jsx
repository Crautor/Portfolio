import { FaGithub, FaGitlab } from 'react-icons/fa6';
import { FiArrowUpRight } from 'react-icons/fi';

import BrowserFrame from '@/components/BrowserFrame';
import SectionHeading from '@/components/SectionHeading';
import { featuredProjects, otherProjects } from '@/content/projects';
import { pick } from '@/i18n/format';

const HOST_ICONS = { GitHub: FaGithub, GitLab: FaGitlab };

export default function Work({ locale, t }) {
  return (
    <section id='work' aria-labelledby='work-title' className='section'>
      <div className='container-page'>
        <SectionHeading id='work-title' intro={t.intro}>
          {t.title}
        </SectionHeading>

        <div className='space-y-24 md:space-y-36'>
          {featuredProjects.map((project, index) => {
            const flipped = index % 2 === 1;
            return (
              <article
                key={project.id}
                id={project.id}
                aria-labelledby={`${project.id}-title`}
                className='grid items-center gap-8 lg:grid-cols-12 lg:gap-14'
              >
                {/* Same destination as the text link below, so it stays out of the tab order. */}
                <a
                  href={project.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  tabIndex={-1}
                  aria-hidden='true'
                  className={`group block lg:col-span-7 ${flipped ? 'lg:order-2' : ''}`}
                >
                  <BrowserFrame
                    image={project.image}
                    domain={project.domain}
                    sizes='(min-width: 1152px) 640px, (min-width: 1024px) 56vw, 100vw'
                    className='transition-colors duration-300 group-hover:border-accent/40'
                  />
                </a>

                <div className={`lg:col-span-5 ${flipped ? 'lg:order-1' : ''}`}>
                  <h3
                    id={`${project.id}-title`}
                    className='font-display text-4xl font-bold tracking-tight md:text-5xl'
                  >
                    {project.name}
                  </h3>
                  <p className='mt-5 text-lg leading-relaxed text-mist/85'>
                    {pick(project.description, locale)}
                  </p>
                  <p className='mt-5 text-sm text-moss'>{project.stack.join(', ')}</p>
                  <a
                    href={project.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-link mt-8'
                  >
                    {t.visit}
                    <span className='sr-only'>: {project.name}</span>
                    <FiArrowUpRight aria-hidden='true' />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        <div className='mt-32 md:mt-44'>
          <h3 className='font-display text-3xl font-bold tracking-tight md:text-4xl'>{t.otherTitle}</h3>
          <p className='mt-3 text-moss'>{t.otherIntro}</p>

          <ul className='mt-10 border-t border-line'>
            {otherProjects.map((project) => {
              const Icon = HOST_ICONS[project.host];
              return (
                <li key={project.url} className='border-b border-line'>
                  <a
                    href={project.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='group grid gap-x-8 gap-y-1.5 py-6 md:grid-cols-12 md:items-baseline'
                  >
                    <span className='font-medium transition-colors group-hover:text-accent md:col-span-3'>
                      {pick(project.name, locale)}
                    </span>
                    <span className='text-moss md:col-span-5'>{pick(project.description, locale)}</span>
                    <span className='text-sm text-moss/80 md:col-span-3'>{project.stack.join(', ')}</span>
                    <span className='flex items-center gap-2 text-sm text-moss transition-colors group-hover:text-mist md:col-span-1 md:justify-end'>
                      <Icon aria-hidden='true' className='text-base' />
                      <span className='md:sr-only'>
                        {t.codeOn} {project.host}
                      </span>
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
