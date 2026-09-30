import { Link } from 'react-router-dom';
import { PageShell } from '../../components/layout/PageShell';

export function Home() {
  return (
    <PageShell page="home">
      <section className="home-hero container">
        <div className="home-copy">
          <p className="eyebrow home-eyebrow">So, you want to travel to</p>
          <h1>Space</h1>
          <p className="body-copy home-description">
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
          </p>
        </div>
        <Link className="explore-button" to="/destination/moon" aria-label="Explore destinations">
          <span>Explore</span>
        </Link>
      </section>
    </PageShell>
  );
}
