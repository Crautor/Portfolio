'use client';

import { useEffect, useState } from 'react';

import { formatDuration, monthsBetween, toYearMonth } from '@/i18n/format';

// The site is a static export, so "today" has to come from the browser.
// Finished periods render on the server; ongoing ones fill in after mount.
export default function Duration({ start, end, locale }) {
  const [today, setToday] = useState(null);

  useEffect(() => {
    if (!end) setToday(toYearMonth(new Date()));
  }, [end]);

  const until = end || today;
  if (!until) return null;

  return formatDuration(monthsBetween(start, until), locale);
}
