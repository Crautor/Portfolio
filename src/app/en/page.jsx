import HomePage from '@/components/HomePage';
import { pageMetadata } from '@/i18n/metadata';

export const metadata = pageMetadata('en');

export default function Page() {
  return <HomePage locale='en' />;
}
