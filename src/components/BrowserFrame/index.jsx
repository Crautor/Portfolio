import Image from 'next/image';

// A project screenshot inside a minimal browser window.
export default function BrowserFrame({ image, domain, sizes, priority = false, className = '' }) {
  return (
    <div className={`frame ${className}`}>
      <div className='frame-bar' aria-hidden='true'>
        <span className='frame-dot' />
        <span className='frame-dot' />
        <span className='frame-dot' />
        {domain ? <span className='ml-2 truncate text-[11px] text-moss'>{domain}</span> : null}
      </div>
      <Image
        src={image}
        alt=''
        sizes={sizes}
        priority={priority}
        placeholder='blur'
        draggable={false}
        className='frame-shot select-none'
      />
    </div>
  );
}
