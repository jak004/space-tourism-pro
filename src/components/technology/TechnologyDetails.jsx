export function TechnologyDetails({ item }) {
  return (
    <article className="technology-details">
      <p className="eyebrow">The terminology...</p>
      <h2>{item.name}</h2>
      <p className="body-copy">{item.description}</p>
    </article>
  );
}
