export default function SectionHeading({ id, intro, children }) {
  return (
    <header className='mb-14 md:mb-20'>
      <h2 id={id} className='section-title'>
        {children}
        <span className='text-accent'>.</span>
      </h2>
      {intro ? (
        <p className='mt-5 max-w-xl text-lg leading-relaxed text-moss'>{intro}</p>
      ) : null}
    </header>
  );
}
