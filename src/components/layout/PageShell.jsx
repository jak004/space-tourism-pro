import { Header } from './Header';

export function PageShell({ page, children }) {
  return (
    <div className={`page page--${page}`}>
      <Header />
      <main>{children}</main>
    </div>
  );
}
