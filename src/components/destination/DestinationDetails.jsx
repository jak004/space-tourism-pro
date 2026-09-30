export function DestinationDetails({ destination }) {
  return (
    <article className="destination-details">
      <h2>{destination.name}</h2>
      <p>{destination.description}</p>
      <div className="detail-rule" />
      <dl className="destination-stats">
        <div>
          <dt>Avg. distance</dt>
          <dd>{destination.distance}</dd>
        </div>
        <div>
          <dt>Est. travel time</dt>
          <dd>{destination.travel}</dd>
        </div>
      </dl>
    </article>
  );
}
