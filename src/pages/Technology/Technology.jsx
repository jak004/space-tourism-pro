import { Navigate, useParams } from 'react-router-dom';
import { technology } from '../../data/spaceData';
import { PageShell } from '../../components/layout/PageShell';
import { PageHeading } from '../../components/ui/PageHeading';
import { SegmentedNav } from '../../components/ui/SegmentedNav';
import { TechnologyDetails } from '../../components/technology/TechnologyDetails';

export function Technology() {
  const { id } = useParams();
  const item = technology.find((entry) => entry.id === id);
  if (!item) return <Navigate to="/technology/launch-vehicle" replace />;

  const tabs = technology.map((entry, index) => ({
    to: `/technology/${entry.id}`,
    number: String(index + 1),
    label: entry.name,
  }));

  return (
    <PageShell page="technology">
      <section className="content-page technology-page">
        <div className="technology-inner container">
          <PageHeading number="03">Space launch 101</PageHeading>
          <div className="technology-grid">
            <SegmentedNav items={tabs} ariaLabel="Technology" />
            <TechnologyDetails item={item} />
            <div className="technology-visual">
              <picture>
                <source media="(min-width: 768px)" srcSet={item.images.portrait} />
                <img src={item.images.landscape} alt={item.name} />
              </picture>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
