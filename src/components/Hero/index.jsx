import BrowserFrame from '@/components/BrowserFrame';
import { featuredProjects } from '@/content/projects';

// Position and tilt of each screenshot in the hero collage, in project order.
const LAYOUT = [
  { x: '0%', y: '6%', r: '-5deg' },
  { x: '33%', y: '0%', r: '4deg' },
  { x: '4%', y: '45%', r: '3deg' },
  { x: '35%', y: '40%', r: '-3deg' },
];

export default function Hero({ t }) {
  return (
    <section id='top' aria-labelledby='hero-title' className='relative overflow-hidden'>
      <div className='container-page grid items-center gap-16 pb-24 pt-32 md:pt-40 lg:grid-cols-12 lg:gap-6 lg:pb-36 lg:pt-44'>
        <div className='lg:col-span-7'>
          <h1 id='hero-title' className='hero-name'>
            <span className='rise block' style={{ '--delay': '60ms' }}>
              Vitor
            </span>
            <span className='rise block' style={{ '--delay': '140ms' }}>
              Dallanol<span className='text-accent'>.</span>
            </span>
          </h1>
          <p
            className='rise mt-8 max-w-[36rem] text-lg leading-relaxed text-mist md:text-xl'
            style={{ '--delay': '240ms' }}
          >
            {t.lead}
          </p>
          <p className='rise mt-4 max-w-[36rem] leading-relaxed text-moss' style={{ '--delay': '300ms' }}>
            {t.current}
          </p>
          <div className='rise mt-10 flex flex-wrap gap-3' style={{ '--delay': '360ms' }}>
            <a href='#work' className='btn btn-primary'>
              {t.ctaWork}
            </a>
            <a href='#contact' className='btn btn-ghost'>
              {t.ctaContact}
            </a>
          </div>
        </div>

        <div className='lg:col-span-5'>
          <ul className='collage' aria-label={t.collageLabel}>
            {featuredProjects.map((project, index) => (
              <li
                key={project.id}
                className='collage-card'
                style={{
                  '--index': index,
                  '--x': LAYOUT[index].x,
                  '--y': LAYOUT[index].y,
                  '--r': LAYOUT[index].r,
                }}
              >
                <a href={`#${project.id}`} aria-label={project.name} className='block rounded-[14px]'>
                  <BrowserFrame
                    image={project.image}
                    sizes='(min-width: 1024px) 300px, 64vw'
                    priority={index < 2}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
