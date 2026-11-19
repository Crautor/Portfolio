'use client';

import { useEffect } from 'react';

// The root layout serves both languages, so the English page
// updates <html lang> once it loads.
export default function HtmlLang({ lang }) {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return null;
}
