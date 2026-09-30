import { Navigate, useParams } from 'react-router-dom';
import { destinations } from '../../data/spaceData';
import { PageShell } from '../../components/layout/PageShell';
import { PageHeading } from '../../components/ui/PageHeading';
import { SegmentedNav } from '../../components/ui/SegmentedNav';
import { DestinationDetails } from '../../components/destination/DestinationDetails';

export function Destination() {
  const { id } = useParams();
  const destination = destinations.find((item) => item.id === id);
  if (!destination) return <Navigate to="/destination/moon" replace />;

  const tabs = destinations.map((item) => ({ to: `/destination/${item.id}`, label: item.name }));

  return (
    <PageShell page="destination">
      <section className="content-page container">
        <PageHeading number="01">Pick your destination</PageHeading>
        <div className="destination-grid">
          <div className="destination-visual">
            <picture>
              <source srcSet={destination.images.webp} type="image/webp" />
              <img src={destination.images.png} alt={`${destination.name} viewed from space`} />
            </picture>
          </div>
          <div className="destination-panel">
            <SegmentedNav items={tabs} ariaLabel="Destinations" />
            <DestinationDetails destination={destination} />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
