import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa6';
import { FiMail } from 'react-icons/fi';

import CopyEmail from '@/components/CopyEmail';
import SectionHeading from '@/components/SectionHeading';
import { profile } from '@/content/profile';

const SOCIAL_ICONS = { linkedin: FaLinkedin, github: FaGithub, instagram: FaInstagram };

export default function Contact({ t }) {
  return (
    <section id='contact' aria-labelledby='contact-title' className='section pb-20 md:pb-28'>
      <div className='container-page'>
        <SectionHeading id='contact-title'>{t.title}</SectionHeading>

        <p className='contact-lead max-w-3xl'>{t.lead}</p>

        <div className='mt-12 flex flex-wrap items-center gap-3'>
          <a href={`mailto:${profile.email}`} className='btn btn-primary'>
            <FiMail aria-hidden='true' />
            {profile.email}
          </a>
          <CopyEmail email={profile.email} label={t.copy} copiedLabel={t.copied} />
          <a href={profile.whatsapp} target='_blank' rel='noopener noreferrer' className='btn btn-ghost'>
            <FaWhatsapp aria-hidden='true' />
            {t.whatsapp}
          </a>
        </div>

        <ul className='mt-14 flex flex-wrap gap-x-8 gap-y-4'>
          {profile.socials.map(({ id, label, href }) => {
            const Icon = SOCIAL_ICONS[id];
            return (
              <li key={id}>
                <a
                  href={href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='nav-link inline-flex items-center gap-2'
                >
                  <Icon aria-hidden='true' />
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export function SiteFooter({ t }) {
  return (
    <footer className='border-t border-line'>
      <div className='container-page flex flex-wrap items-center justify-between gap-4 py-8 text-sm text-moss'>
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <a href='#top' className='nav-link'>
          {t.backToTop}
        </a>
      </div>
    </footer>
  );
}
