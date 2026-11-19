import NotFound from '@/components/NotFound';

// Shared by both languages, so the title stays language neutral.
export const metadata = {
  title: '404 | Vitor Dallanol',
};

export default function NotFoundPage() {
  return <NotFound />;
}
