import { Link } from 'react-router-dom';
import { PageShell } from '../components/layout/PageShell';

export function NotFound() {
  return (
    <PageShell page="home">
      <section className="not-found container">
        <p className="eyebrow">404</p>
        <h1>Page not found</h1>
        <p className="body-copy">The destination you requested does not exist.</p>
        <Link className="text-link" to="/">Return home</Link>
      </section>
    </PageShell>
  );
}
