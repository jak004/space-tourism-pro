import { Navigate, useParams } from 'react-router-dom';
import { crew } from '../../data/spaceData';
import { PageShell } from '../../components/layout/PageShell';
import { PageHeading } from '../../components/ui/PageHeading';
import { SegmentedNav } from '../../components/ui/SegmentedNav';
import { CrewDetails } from '../../components/crew/CrewDetails';

export function Crew() {
  const { id } = useParams();
  const member = crew.find((item) => item.id === id);
  if (!member) return <Navigate to="/crew/douglas-hurley" replace />;

  const tabs = crew.map((item) => ({ to: `/crew/${item.id}`, label: item.name }));

  return (
    <PageShell page="crew">
      <section className="content-page container crew-page">
        <PageHeading number="02">Meet your crew</PageHeading>
        <div className="crew-grid">
          <div className="crew-copy">
            <CrewDetails member={member} />
            <SegmentedNav items={tabs} ariaLabel="Crew members" />
          </div>
          <div className="crew-visual">
            <picture>
              <source srcSet={member.images.webp} type="image/webp" />
              <img src={member.images.png} alt={member.name} />
            </picture>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
