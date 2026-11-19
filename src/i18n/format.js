const MONTHS = {
  pt: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'],
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
};

// Content fields are either a plain value or a { pt, en } object.
export function pick(value, locale) {
  if (value && typeof value === 'object' && !Array.isArray(value)) {
    return value[locale];
  }
  return value;
}

// '2024-09' -> 'set 2024' / 'Sep 2024'
export function formatMonth(yearMonth, locale) {
  const [year, month] = yearMonth.split('-').map(Number);
  return `${MONTHS[locale][month - 1]} ${year}`;
}

export function toYearMonth(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
}

// Inclusive month count, the same way LinkedIn shows it
// (Dec 2023 to Sep 2024 = 10 months).
export function monthsBetween(start, end) {
  const [startYear, startMonth] = start.split('-').map(Number);
  const [endYear, endMonth] = end.split('-').map(Number);
  return (endYear - startYear) * 12 + (endMonth - startMonth) + 1;
}

export function formatDuration(totalMonths, locale) {
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const parts = [];

  if (locale === 'pt') {
    if (years) parts.push(`${years} ${years > 1 ? 'anos' : 'ano'}`);
    if (months) parts.push(`${months} ${months > 1 ? 'meses' : 'mês'}`);
    return parts.join(' e ');
  }

  if (years) parts.push(`${years} ${years > 1 ? 'years' : 'year'}`);
  if (months) parts.push(`${months} ${months > 1 ? 'months' : 'month'}`);
  return parts.join(' ');
}
