'use client';

import { useEffect, useState } from 'react';
import { FiCheck, FiCopy } from 'react-icons/fi';

export default function CopyEmail({ email, label, copiedLabel }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return undefined;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      // Clipboard access can be blocked by the browser; the mailto link still works.
    }
  }

  return (
    <>
      <button type='button' onClick={copy} className='btn btn-ghost'>
        {copied ? (
          <FiCheck aria-hidden='true' className='text-accent' />
        ) : (
          <FiCopy aria-hidden='true' />
        )}
        {copied ? copiedLabel : label}
      </button>
      <span role='status' className='sr-only'>
        {copied ? copiedLabel : ''}
      </span>
    </>
  );
}
